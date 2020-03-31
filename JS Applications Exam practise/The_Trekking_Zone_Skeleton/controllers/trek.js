import extend from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        create(ctx) {
            extend(ctx)
                .partial('../views/trek/create.hbs')
        },
        details(ctx){
            const {id} = ctx.params;
           
            models.trek.get(id)
            .then(r => console.log(r))
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
                        .partial('../views/home/home.hbs')
                })
                .catch(console.error);
        }
    }
};