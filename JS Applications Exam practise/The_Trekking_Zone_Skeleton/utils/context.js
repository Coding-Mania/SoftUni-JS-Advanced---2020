export default function (ctx) {
    firebase.auth().onAuthStateChanged(async function (user) {
        if (user) {
            ctx.isLoggedIn = true;
            sessionStorage.setItem('uid', user.uid);
            ctx.email = user.email;
            let treks = await firebase.firestore().collection("treks").get()
            ctx.treks = treks;
            console.log(ctx.treks)
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