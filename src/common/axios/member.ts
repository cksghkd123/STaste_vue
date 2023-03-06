import client from ".";
import { SignUp } from "@/common/types/interface";

const MEMBER_API = {
    signIn() {
        return client.get('/signIn',)
    },
    postSignUp(user: SignUp) {
        return client.post('/signUp', user)
    },
    oauth2SignIn() {
        return client.get('/oauth/signIn')
    }

}

export default MEMBER_API