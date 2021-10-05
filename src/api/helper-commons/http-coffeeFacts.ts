import axios from "axios";

const CoffeeFactsHTTP = axios.create({
    baseURL: process.env.REACT_COFFEE_FACTS_BASE || "http://localhost:3001",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer" // ${token} Get token from wrapper by passing it down? 
    }
})

const Request = {
    CoffeeFactsHTTP
}

export default Request