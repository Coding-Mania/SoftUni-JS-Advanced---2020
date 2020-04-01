import extend from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        create(ctx) {
            extend(ctx)
                .partial('../views/trek/create.hbs')
        },
        details(ctx) {
            const { id } = ctx.params;
            models.trek.get(id)
                .then(r => {
                    const { location, description, dateTime, likes, organizer, imageURL } = r.data();
                    ctx.location = location;
                    ctx.description = description;
                    ctx.dateTime = dateTime;
                    ctx.likes = likes;
                    ctx.organizer = organizer;
                    ctx.imageURL = imageURL;
                    ctx.isAuthor = organizer === sessionStorage.getItem('email');
                    extend(ctx).partial('../views/trek/details.hbs')
                })
                .catch(console.error)
        },
        edit(ctx) {
            const id = ctx.params.id;
            models.trek.get(id)
                .then(r => {
                    const { location, description, dateTime, likes, organizer, imageURL } = r.data();
                    ctx.location = location;
                    ctx.description = description;
                    ctx.dateTime = dateTime;
                    ctx.likes = likes;
                    ctx.organizer = organizer;
                    ctx.imageURL = imageURL;
                    ctx.id = id;
                    extend(ctx).partial('../views/trek/edit.hbs')
                })
                .catch(console.error)
        }
    },
    post: {
        create(ctx) {
            const { location, dateTime, description, imageURL } = ctx.params;

            const trek = {
                location,
                dateTime,
                description,
                imageURL,
                organizer: sessionStorage.getItem('email'),
                likes: 0
            }

            models.trek.create(trek)
                .then(r => {
                    extend(ctx)
                        .then(c => this.redirect('/home'))
                })
                .catch(console.error);
        },
        edit(ctx) {
            const id = ctx.params.id;
            models.trek.get(id)
                .then(r => {
                    const { location, description, dateTime, imageURL } = ctx.params;
                    const { likes, organizer } = r.data();

                    const trek = {
                        location,
                        description,
                        dateTime,
                        likes,
                        organizer,
                        imageURL,
                        id
                    }

                    return models.trek.update(id, trek);
                })
                .then(extend(ctx)
                    .then(c => this.redirect('/home')))
                .catch(console.error)
        },
        like(ctx) {
            const id = ctx.params.id;
            models.trek.get(id)
                .then(r => {
                    const { location, description, dateTime, imageURL, likes, organizer } = r.data();

                    const trek = {
                        location,
                        description,
                        dateTime,
                        likes: Number(likes) + 1,
                        organizer,
                        imageURL,
                        id
                    }

                    return models.trek.update(id, trek);
                })
                .then(extend(ctx)
                    .then(c => this.redirect('/home')))
                .catch(console.error)
        }
    },
    delete: {
        delete(ctx) {
            const id = ctx.params.id;

            models.trek.delete(id)
                .then(r => extend(ctx)
                    .then(c => this.redirect('/home')))
                .catch(console.error)
        }
    }
};