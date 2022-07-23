import client from ".";

const ARTICLE_API = {
    getArticles() {
        return client.get('/articles')
    }
}

export default ARTICLE_API