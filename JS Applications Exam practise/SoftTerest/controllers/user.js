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
                    .then(r => this.redirect('/home')))
                .catch(console.error)
        },
        profile(ctx) {
            models.idea.getAll().then(r => {
                let ideas = r.docs.map(d => { return { ...d.data(), id: d.id } }).filter(t => t.organizer === sessionStorage.getItem('email'));
                ideas = ideas.sort((a,b) => b.likes - a.likes);
                ctx.ideas = ideas || {};
                extend(ctx).
                    partial('../views/user/profile.hbs');
            })
        }
    },
    post: {
        register(ctx) {
            const { email, password, repeatPassword } = ctx.params;
            if (password === repeatPassword) {
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