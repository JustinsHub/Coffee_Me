import Request from "./helper-commons/http-coffeeFacts";

class CoffeeFacts {
    static async getAllCoffeeFacts(){
        const getAllFacts = await Request.CoffeeFactsHTTP.get('/api/facts')
        return getAllFacts
    }

    static async getCoffeeFactById(id:number){
        const getSingleCoffeeFact = await Request.CoffeeFactsHTTP.get(`/api/${id}`)
        return getSingleCoffeeFact
    }

    static async postNewCoffeeFact(id:number, facts: unknown){
        const postNewFact = await Request.CoffeeFactsHTTP.post(`/api/facts/${id}/submit`, facts)
        return postNewFact
    }
}

export default CoffeeFacts