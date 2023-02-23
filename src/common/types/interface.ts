interface Article {
    title: string
    content: string
    id?: number
}

interface Signup {
    username: string
    password: string
    email: string
}
export { Article, Signup }