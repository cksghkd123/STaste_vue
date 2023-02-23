import client from ".";
import { Article } from "@/common/types/interface"

const ARTICLE_API = {
    getArticles() {
        return client.get('/articles')
    },
    postArticle(article: Article) {
        return client.post('/article', article)
    },
    deleteArticle(articleId: number) {
        return client.delete(`/article/${articleId}`)
    }
}

export default ARTICLE_API