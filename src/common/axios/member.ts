import client from ".";
import { Signup } from "@/common/types/interface";

const MEMBER_API = {
    getSignin() {
        return client.get('/signin')
    },
    getSignup() {
        return client.get('/signup')
    }
    ,
    postSignup(user: Signup) {
        return client.post('/signup', user)
    }
}

export default MEMBER_API