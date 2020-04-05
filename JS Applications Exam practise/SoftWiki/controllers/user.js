import extend from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        register(ctx) {
            extend(ctx).
                partial('../views/user/register.hbs');
        },
        login(ctx) {
            extend(ctx).
                partial('../views/user/login.hbs');
        },
        logout(ctx) {
            models.user.logout()
                .then(r => extend(ctx)
                    .then(r => {
                        this.redirect('/login')
                    }))
                .catch(console.error)
        },
        profile(ctx) {
            models.article.getAll().then(r => {
                const articles = r.docs.map(d => { return { ...d.data(), id: d.id } }).filter(t => t.organizer === sessionStorage.getItem('email'));
                ctx.articles = articles || {};
                extend(ctx).
                    partial('../views/user/profile.hbs');
            })
        }
    },
    post: {
        register(ctx) {
            const { email, password, rePassword } = ctx.params;
            if (password === rePassword) {
                models.user.register(email, password)
                    .then(r => {
                        extend(ctx)
                            .then(r => this.redirect('/home'));
                    })
                    .catch(console.error)
            }
        },
        login(ctx) {
            const { email, password } = ctx.params;
            models.user.login(email, password)
                .then(r => {
                    extend(ctx).then(r => this.redirect('/home'));
                })
                .catch(console.error)
        }
    }
};