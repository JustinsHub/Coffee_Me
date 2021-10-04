import React, { useEffect, useState } from "react";
import CoffeeFacts from "../api/coffeeFactsAPI";


const Main: React.FC = () => {
    const [coffeeFact, setCoffeeFact] = useState<any>([])
    //add an input for anybody to put in facts // Coffee Fact component
    //render a random fact when user lands on page // have a button to randomly change that fact (API)

    useEffect(()=>{
        const getAllFacts = async () => {
            try {
                const coffeeData = await CoffeeFacts.getAllCoffeeFacts()
                const coffeeFacts = coffeeData.data
                const randomCoffeeFact = Math.floor(Math.random() * coffeeFacts.length)
                setCoffeeFact(() => coffeeFacts[randomCoffeeFact].coffee_facts)

            } catch (error) {
                return error
            }
        }
        getAllFacts()
    }, [])

        //put coffee fact in the middle
        //button in the middle
        //put in useeffect after implemention of coffeefunction
        //new fact renders input
        //random fact renders just 1 fact from DB
    return (
        <div>
            Coffee Facts:
            <ul>
                {coffeeFact}
            </ul>

            <div>
            <button className="btn btn-warning">New Fact</button> 
            <button className="btn btn-primary">Random Fact</button>
            </div>
        </div>
        )
}

export default Main