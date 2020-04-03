import extend from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        create(ctx) {
            extend(ctx)
                .partial('../views/idea/create.hbs')
        },
        details(ctx) {
            const { id } = ctx.params;
            models.idea.get(id)
                .then(r => {

                    const { title, description, imageURL, likes, organizer, comments } = r.data();

                    ctx.title = title;
                    ctx.description = description;
                    ctx.likes = likes;
                    ctx.organizer = organizer;
                    ctx.imageURL = imageURL;
                    ctx.comments = comments;
                    ctx.isAuthor = organizer === sessionStorage.getItem('email');
                    extend(ctx).partial('../views/idea/details.hbs')
                })
                .catch(console.error)
        },
    },
    post: {
        create(ctx) {
            const { title, description, imageURL } = ctx.params;

            const idea = {
                title,
                description,
                imageURL,
                organizer: sessionStorage.getItem('email'),
                likes: 0,
                comments: []
            }

            models.idea.create(idea)
                .then(r => {
                    extend(ctx)
                        .then(c => this.redirect('/home'))
                })
                .catch(console.error);
        },
        comment(ctx) {
            const id = ctx.params.id;
            models.idea.get(id)
                .then(r => {
                    const { title, description, imageURL, likes, organizer, comments } = r.data();
                    const { newComment } = ctx.params;

                    const idea = {
                        title,
                        description,
                        imageURL,
                        likes,
                        organizer,
                        comments,
                    }

                    idea.comments.push(`${ctx.email}: ${newComment}`);

                    return models.idea.update(id, idea);
                })
                .then(extend(ctx)
                    .then(c => this.redirect('/home')))
                .catch(console.error)
        },
        like(ctx) {
            const id = ctx.params.id;
            models.idea.get(id)
                .then(r => {
                    const { title, description, imageURL, likes, organizer, comments } = r.data();

                    const idea = {
                        title,
                        description,
                        imageURL,
                        likes: Number(likes) + 1,
                        organizer,
                        comments
                    }

                    return models.idea.update(id, idea);
                })
                .then(extend(ctx)
                    .then(c => this.redirect('/home')))
                .catch(console.error)
        }
    },
    delete: {
        delete(ctx) {
            const id = ctx.params.id;

            models.idea.delete(id)
                .then(r => extend(ctx)
                    .then(c => this.redirect('/home')))
                .catch(console.error)
        }
    }
};