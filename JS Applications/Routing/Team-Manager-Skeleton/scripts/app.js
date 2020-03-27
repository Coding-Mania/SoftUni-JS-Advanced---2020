import DatabaseProvider from './DatabaseProvider.js';
const rootURL = 'https://team-manager-fa820.firebaseio.com';

let databaseProvider = new DatabaseProvider(rootURL);

const partials = {
    header: './templates/common/header.hbs',
    footer: './templates/common/footer.hbs'
}

function applyCommon(ctx) {
    ctx.username = sessionStorage.getItem('username');
    ctx.loggedIn = !!sessionStorage.getItem('token');
}

function mainView() {
    applyCommon(this);
    this.loadPartials(partials).
        partial('./templates/home/home.hbs');
}

function aboutView() {
    applyCommon(this);
    this.loadPartials(partials).
        partial('./templates/about/about.hbs');
}

async function loginView() {
    partials['loginForm'] = './templates/login/loginForm.hbs';
    await this.loadPartials(partials).
        partial('./templates/login/loginPage.hbs');

    let btn = document.querySelector('#login .btn');

    btn.addEventListener('click', async (e) => {
        e.preventDefault();

        let user = {
            email: document.querySelector('#login #email').value,
            password: document.querySelector('#login #password').value,
        }

        await firebase.auth().signInWithEmailAndPassword(user.email, user.password);

        let token = await firebase.auth().currentUser.getIdToken();

        sessionStorage.setItem('token', token);
        sessionStorage.setItem('username', user.email);

        this.redirect('/home');
    })
}

async function registerView() {
    partials['registerForm'] = './templates/register/registerForm.hbs';

    await this.loadPartials(partials)
        .partial('./templates/register/registerPage.hbs');


    let btn = document.querySelector('#register .btn');

    btn.addEventListener('click', async (e) => {
        e.preventDefault();

        let user = {
            email: document.querySelector('#register #email').value,
            password: document.querySelector('#register #password').value,
            repeatPassword: document.querySelector('#register #repeatPassword').value
        }

        if (user.password !== user.repeatPassword) {
            return;
        }

        await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);

        let token = await firebase.auth().currentUser.getIdToken();

        sessionStorage.setItem('token', token);
        sessionStorage.setItem('username', user.email);

        this.redirect('/home');
    })
}

function logoutView() {
    sessionStorage.clear();
    firebase.auth().signOut();
    this.redirect('/home');
}

async function catalogView(ctx) {
    const token = sessionStorage.getItem('token');
    let data = await databaseProvider.getAllTeams(token);
    ctx.hasNoTeam = data === null;
    applyCommon(this);
    partials['team'] = './templates/catalog/team.hbs';

    if (!ctx.hasNoTeam) {
        Object.keys(data).forEach(key => {
            data[key]['_id'] = key;
        })
    }

    ctx.teams = data;

    this.loadPartials(partials).
        partial('./templates/catalog/teamCatalog.hbs');
}

async function createView() {
    applyCommon(this);

    partials['createForm'] = './templates/create/createForm.hbs';
    await this.loadPartials(partials).
        partial('./templates/create/createPage.hbs');
}

function createPostView() {
    let team = {
        name: document.querySelector('#create #name').value,
        comment: document.querySelector('#create #comment').value,
        members: [{ username: sessionStorage.getItem('username') }]
    }

    if (!team.name && !team.comment) {
        return;
    }

    databaseProvider.createTeam(team, sessionStorage.getItem('token'))
        .then(this.redirect('/catalog'));
    ;
}

async function teamView(ctx) {
    partials['teamMembers'] = './templates/catalog/teamMember.hbs';
    partials['teamControls'] = './templates/catalog/teamControls.hbs';

    const id = this.params._id;
    const token = sessionStorage.getItem('token');
    const team = await databaseProvider.getTeam(id, token);

    ctx.name = team.name;
    ctx.comment = team.comment;
    ctx.members = team.members;
    this.loadPartials(partials).
        partial('./templates/catalog/details.hbs');
}

let app = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');

    this.get('/', mainView);
    this.get('/home', mainView);
    this.get('/about', aboutView);
    this.get('/login', loginView);
    this.post('/login', () => false);
    this.get('/register', registerView);
    this.post('/register', () => false);
    this.get('/logout', logoutView);
    this.get('/catalog', catalogView);
    this.get('/create', createView);
    this.post('/create', createPostView);
    this.get(`/catalog/:_id`, teamView);
})

app.run('/');