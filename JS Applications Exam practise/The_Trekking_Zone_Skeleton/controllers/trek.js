import extend from '../utils/context.js';
import models from '../models/index.js'

export default {
    get: {
        create(ctx) {
            extend(ctx).
                partial('../views/trek/create.hbs');
        },
    },
    post: {
        create(ctx) {
            const { location, dateTime, description, imageURL } = ctx.params;

            models.trek.create({ location, dateTime, description, imageURL })
                .then(r => {
                    extend(ctx)
                        .partial('../views/home/home.hbs')
                })
                .catch(console.error);
        }
    }
};