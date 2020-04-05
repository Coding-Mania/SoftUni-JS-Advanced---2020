import extend from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        home(ctx) {
            if (sessionStorage.getItem('email')) {
                models.article.getAll().then(r => {
                    const articles = r.docs.map(d => { return { ...d.data(), id: d.id } });
                    ctx.articles = articles || {};
                    ctx.jsArticles = articles.filter(a => a.category.toLowerCase() === 'javascript');
                    ctx.jsArticles.sort((a, b) => b.title.localeCompare(a.title));

                    ctx.cSharpArticles = articles.filter(a => a.category.toLowerCase() === 'c#');
                    ctx.cSharpArticles.sort((a, b) => b.title.localeCompare(a.title));

                    ctx.javaArticles = articles.filter(a => a.category.toLowerCase() === 'java');
                    ctx.javaArticles.sort((a, b) => b.title.localeCompare(a.title));

                    ctx.pytonArticles = articles.filter(a => a.category.toLowerCase() === 'pyton');
                    ctx.pytonArticles.sort((a, b) => b.title.localeCompare(a.title));

                    extend(ctx).
                        partial('../views/home/home.hbs');
                })
            } else {
                extend(ctx).
                    partial('../views/user/login.hbs');
            }
        }
    }
};