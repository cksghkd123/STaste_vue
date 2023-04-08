import client from ".";
import { SignIn, SignUp } from "@/common/types/interface";

const MEMBER_API = {
    postSignIn(user: SignIn) {
        return client.post('/signIn', user)
    },
    postSignUp(user: SignUp) {
        return client.post('/signUp', user)
    },
    getUserAbility(user: string) {
        return client.get(`/userAbility/${user}`)
    }


}

export default MEMBER_API