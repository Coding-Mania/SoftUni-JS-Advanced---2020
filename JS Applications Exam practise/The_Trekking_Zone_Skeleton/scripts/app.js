import controllers from '../controllers/index.js';

const app = Sammy('#home', function () {
    this.use('Handlebars', 'hbs');

    this.get('/home', controllers.home.get.home);
    this.get('/register', controllers.user.get.register);
    this.get('/login', controllers.user.get.login);
    this.get('/logout', controllers.user.get.logout);
    this.get('/create', controllers.trek.get.create);
    this.get('/details/:id', controllers.trek.get.details);
    this.get('/edit/:id', controllers.trek.get.edit);
    this.get('/close/:id', controllers.trek.delete.delete);
    this.get('/profile', controllers.user.get.profile);
    this.get('/like/:id', controllers.trek.post.like);

    this.post('/register', controllers.user.post.register);
    this.post('/login', controllers.user.post.login);
    this.post('/create', controllers.trek.post.create);
    this.post('/:id', controllers.trek.post.edit);
})

app.run('/home');