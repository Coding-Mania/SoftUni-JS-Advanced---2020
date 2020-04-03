import controllers from '../controllers/index.js';

const app = Sammy('#home', function () {
    this.use('Handlebars', 'hbs');

    this.get('/home', controllers.home.get.home);
    this.get('/register', controllers.user.get.register);
    this.get('/login', controllers.user.get.login);
    this.get('/logout', controllers.user.get.logout);

    this.get('/create', controllers.idea.get.create);
    this.get('/details/:id', controllers.idea.get.details);

    this.get('/delete/:id', controllers.idea.delete.delete);
    this.get('/profile', controllers.user.get.profile);

    this.get('/like/:id', controllers.idea.post.like);

    this.post('/register', controllers.user.post.register);
    this.post('/login', controllers.user.post.login);
    this.post('/create', controllers.idea.post.create);
    this.post('/comment/:id', controllers.idea.post.comment);
})

app.run('/home');