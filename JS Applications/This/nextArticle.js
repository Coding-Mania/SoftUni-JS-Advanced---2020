function getArticleGenerator(articles) {

    let articlesArr = articles;

    let div = document.querySelector('#content');

    return () => {
        if (articlesArr.length > 0) {
            let articleE = document.createElement('article');

            let element = articlesArr[0];
            articlesArr = articlesArr.splice(1);

            articleE.innerHTML = element;

            div.appendChild(articleE);
        }
    }
}
