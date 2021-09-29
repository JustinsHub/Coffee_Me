import React, { useState } from "react";
import { AxiosResponse } from "axios";
import CoffeeFacts from "../api/coffeeFactsAPI";


const Main: React.FC = () => {
    const [coffeeFact, setCoffeeFact] = useState<any>([])
    //add an input for anybody to put in facts // Coffee Fact component
    //render a random fact when user lands on page // have a button to randomly change that fact (API)

    const getAllFacts = async () => {
        try {
            const coffeeData = await CoffeeFacts.getAllCoffeeFacts()
            const {data} = coffeeData
            setCoffeeFact(data)
            
        } catch (error) {
            return error
        }
    }

        //put coffee fact in the middle
        //button in the middle
    return (
        <div>
            Coffee Facts:
            <ul>
                {coffeeFact.map((coffee:any, i: number)=> <li key={i}>{coffee.coffee_facts}</li>)}
            </ul>

            <div>
            <button className="btn btn-primary"onClick={getAllFacts}>Get Fact</button>
            </div>
        </div>
        )
}

export default Main