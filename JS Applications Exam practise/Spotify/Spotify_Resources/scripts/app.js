import controllers from '../controllers/index.js';

const app = Sammy('#home', function () {
    this.use('Handlebars', 'hbs');

    this.get('/home', controllers.home.get.home);
    this.get('/register', controllers.user.get.register);
    this.get('/login', controllers.user.get.login);
    this.get('/logout', controllers.user.get.logout);

    this.get('/create', controllers.song.get.create);
    this.get('/delete/:id', controllers.song.delete.delete);
    this.get('/allSongs', controllers.song.get.allSongs);
    this.get('/mySongs', controllers.song.get.mySongs);
    this.get('/like/:id', controllers.song.post.like);
    this.get('/listen/:id', controllers.song.post.listen);

    this.post('/register', controllers.user.post.register);
    this.post('/login', controllers.user.post.login);
    this.post('/create', controllers.song.post.create);
})

app.run('/home');