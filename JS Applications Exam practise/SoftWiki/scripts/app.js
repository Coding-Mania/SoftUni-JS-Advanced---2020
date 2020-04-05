import controllers from '../controllers/index.js';

const app = Sammy('#root', function () {
    this.use('Handlebars', 'hbs');

    this.get('/home', controllers.home.get.home);
    this.get('/register', controllers.user.get.register);
    this.get('/login', controllers.user.get.login);
    this.get('/logout', controllers.user.get.logout);
    this.get('/create', controllers.article.get.create);
    this.get('/details/:id', controllers.article.get.details);
    this.get('/edit/:id', controllers.article.get.edit);
    this.get('/delete/:id', controllers.article.delete.delete);
    this.get('/profile', controllers.user.get.profile);
    this.get('/like/:id', controllers.article.post.like);

    this.post('/register', controllers.user.post.register);
    this.post('/login', controllers.user.post.login);
    this.post('/create', controllers.article.post.create);
    this.post('/edit/:id', controllers.article.post.edit);
})

app.run('/home');