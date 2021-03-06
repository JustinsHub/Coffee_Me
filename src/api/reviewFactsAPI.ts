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
    //any user can post a fact that gets reviewed by admin (must object key that relates to DB) //Can put on schema?
    static async postReviewFact(facts:string) {
        const newPostReview = await Request.CoffeeFactsHTTP.post(`/api/reviews/post`, 
        {
            fact:facts
        })
        return newPostReview
    }
}

export default ReviewFacts