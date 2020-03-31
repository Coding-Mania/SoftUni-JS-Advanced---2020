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
                .then(r => ctx.redirect('/home'))
                .catch(console.error)
        }
    },
    post: {
        register(ctx) {
            const { email, password, rePassword } = ctx.params;
            if (password === rePassword) {
                models.user.register(email, password)
                    .then(r => {
                        ctx.redirect('/home');
                    })
                    .catch(console.error)
            }
        },
        login(ctx) {
            const { email, password } = ctx.params;
            models.user.login(email, password)
                .then(r => {
                    ctx.redirect('/home');
                })
                .catch(console.error)
        }
    }
};