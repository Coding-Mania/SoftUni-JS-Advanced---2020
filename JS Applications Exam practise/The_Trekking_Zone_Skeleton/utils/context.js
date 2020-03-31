export default function (ctx) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            ctx.isLoggedIn = true;
            sessionStorage.setItem('uid', user.uid);
            sessionStorage.setItem('email', user.email);
            ctx.email = user.email;
        } else {
            ctx.isLoggedIn = false;
            ctx.email = null;
            sessionStorage.clear();
        }
    })

    return ctx.loadPartials({
        header: '../views/common/header.hbs',
        footer: '../views/common/footer.hbs'
    });
};