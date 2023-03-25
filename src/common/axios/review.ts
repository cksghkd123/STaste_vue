import client from ".";
import { Review } from "@/common/types/interface"

const Review_API = {
    getReviews() {
        return client.get('/reviews')
    },
    postReview(review: Review) {
        return client.post('/review', review)
    },
    deleteReview(username: string, reviewId: number) {
        return client.delete(`/review/${username}/${reviewId}`)
    }
}

export default Review_API