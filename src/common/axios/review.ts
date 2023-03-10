import client from ".";
import { Review } from "@/common/types/interface"

const Review_API = {
    getReviews() {
        return client.get('/reviews')
    },
    postReview(review: Review) {
        return client.post('/review', review)
    },
    deleteReview(reviewId: number) {
        return client.delete(`/review/${reviewId}`)
    }
}

export default Review_API