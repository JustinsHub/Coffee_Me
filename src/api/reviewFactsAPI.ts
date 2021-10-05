import Request from "./helper-commons/http-coffeeFacts";

class ReviewFacts {
    static async getAllReviewFacts(){
        const getAllFacts = await Request.CoffeeFactsHTTP.get(`/api/reviews/all`)
        return getAllFacts
    }
    static async getSingleReviewFact(id:number){
        const singleFact = await Request.CoffeeFactsHTTP.get(`/api/reviews/${id}`)
        return singleFact
    }
    //any user can post a fact that gets reviewed by admin
    static async postReviewFact(facts:string) {
        const newPostReview = await Request.CoffeeFactsHTTP.post(`/api/reviews/post`, facts)
        return newPostReview
    }
}

export default ReviewFacts