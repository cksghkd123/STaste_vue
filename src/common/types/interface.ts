interface Article {
    title: string
    content: string
    id?: number
}

interface SignUp {
    username: string
    password: string
    email: string
}
export { Article, SignUp }