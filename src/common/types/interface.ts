interface Review {
    title: string
    content: string
    id?: number
}

interface SignUp {
    username: string
    password: string
    email: string
}
export { Review, SignUp }