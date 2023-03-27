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

interface Food {
    foodname: string
    explanation: string
}
export { Review, SignUp, SignIn, Food }