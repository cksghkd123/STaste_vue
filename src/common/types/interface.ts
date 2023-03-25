interface Review {
    username?: string
    food: string
    score: string
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