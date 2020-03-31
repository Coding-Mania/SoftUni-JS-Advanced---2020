import extend from '../utils/context.js';

export default {
    get: {
        home(ctx) {
            extend(ctx).
                partial('../views/home/home.hbs');
        }
    }
};