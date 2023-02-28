import client from ".";
import { SignUp } from "@/common/types/interface";

const MEMBER_API = {
    postSignUp(user: SignUp) {
        return client.post('/signUp', user)
    },
    oauth2SignIn() {
        return client.get('/oauth2/authorization/google')
    }

}

export default MEMBER_API