import extend from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        home(ctx) {
            models.trek.getAll().then(r => {
                const treks = r.docs.map(d => { return { ...d.data(), id: d.id } });
                ctx.treks = treks || {};
                extend(ctx).
                    partial('../views/home/home.hbs');
            })
        }
    }
};