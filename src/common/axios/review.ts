import client from ".";
import { Sticker } from "@/common/types/interface"

const REVIEW_API = {
    getReviews() {
        return client.get('/reviews')
    },
    getReviewsByUser(username: string) {
        return client.get(`/review/user/${username}`)
    },
    postReview(username: string, foodId: number, stickerList: Sticker[]) {
        const requestData = {
            username: username,
            foodId: foodId,
            stickerList: stickerList
        }
        return client.post('/review', requestData)
    },
    deleteReview(username: string, reviewId: number) {
        return client.delete(`/review/${username}/${reviewId}`)
    }
}

export default REVIEW_API