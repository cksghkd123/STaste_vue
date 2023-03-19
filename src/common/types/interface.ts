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

interface SignIn {
    username: string
    password: string
}
export { Review, SignUp, SignIn }