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
interface Sticker {
    id: number;
    spicy_level: number;
    salty_level: number;
    sweet_level: number;
    satisfy_level: number;
}


export { Review, SignUp, SignIn, Food, Sticker }