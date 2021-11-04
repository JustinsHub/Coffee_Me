import axios from "axios";

const CoffeeFactsHTTP = axios.create({
    baseURL: process.env.REACT_COFFEE_FACTS_BASE || "http://localhost:3001",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer` //add token
    }
})

const Request = {
    CoffeeFactsHTTP
}

export default Request