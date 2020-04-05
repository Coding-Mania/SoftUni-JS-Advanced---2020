import extend from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        create(ctx) {
            extend(ctx)
                .partial('../views/article/create.hbs')
        },
        details(ctx) {
            const { id } = ctx.params;
            models.article.get(id)
                .then(r => {
                    const { title, category, content, organizer } = r.data();
                    ctx.title = title;
                    ctx.category = category;
                    ctx.content = content;
                    ctx.organizer = organizer;
                    ctx.isAuthor = organizer === sessionStorage.getItem('email');
                    extend(ctx).partial('../views/article/details.hbs')
                })
                .catch(console.error)
        },
        edit(ctx) {
            const id = ctx.params.id;
            models.article.get(id)
                .then(r => {
                    const { title, category, content, organizer } = r.data();
                    ctx.title = title;
                    ctx.category = category;
                    ctx.content = content;
                    ctx.organizer = organizer;
                    ctx.id = id;
                    extend(ctx).partial('../views/article/edit.hbs')
                })
                .catch(console.error)
        }
    },
    post: {
        create(ctx) {
            const { title, category, content } = ctx.params;

            if (title, category, content) {

                const article = {
                    title,
                    category,
                    content,
                    organizer: sessionStorage.getItem('email'),
                }

                models.article.create(article)
                    .then(r => {
                        extend(ctx)
                            .then(c => this.redirect('/home'))
                    })
                    .catch(console.error);
            }
        },
        edit(ctx) {
            const id = ctx.params.id;
            models.article.get(id)
                .then(r => {
                    const { title, category, content } = ctx.params;
                    const { organizer } = r.data();

                    const article = {
                        title,
                        category,
                        content,
                        organizer
                    }

                    return models.article.update(id, article);
                })
                .then(async () => {
                    await extend(ctx);

                    ctx.redirect('/home');
                })
                .catch(console.error)
        },
    },
    delete: {
        delete(ctx) {
            const id = ctx.params.id;

            models.article.delete(id)
                .then(r => extend(ctx)
                    .then(c => this.redirect('/home')))
                .catch(console.error)
        }
    }
};