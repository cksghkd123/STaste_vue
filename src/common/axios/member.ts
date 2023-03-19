import client from ".";
import { SignIn, SignUp } from "@/common/types/interface";

const MEMBER_API = {
    postSignIn(user: SignIn) {
        return client.post('/signIn', user)
    },
    postSignUp(user: SignUp) {
        return client.post('/signUp', user)
    },
    oauth2SignIn() {
        return client.get('/oauth/signIn')
    }

}

export default MEMBER_API