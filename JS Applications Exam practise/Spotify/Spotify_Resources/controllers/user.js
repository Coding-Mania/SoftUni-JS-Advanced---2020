import extend from '../utils/context.js';
import models from '../models/index.js';
import song from '../models/song.js';

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
                        toastr.success('Logout successful.');
                        this.redirect('/home')
                    }))
                .catch(e => toastr.error(e))
        },
    },
    post: {
        register(ctx) {
            const { email, password } = ctx.params;

            models.user.register(email, password)
                .then(r => {
                    extend(ctx)
                        .then(r => {
                            toastr.success('User registration successful.');
                            this.redirect('/home')
                        });
                })
                .catch(e => toastr.error(e.message))

        },
        login(ctx) {
            const { email, password } = ctx.params;
            models.user.login(email, password)
                .then(r => {
                    extend(ctx).then(r => {
                        toastr.success('Login successful.');
                        this.redirect('/home')
                    });
                })
                .catch(e => toastr.error(e.message))
        }
    }
};