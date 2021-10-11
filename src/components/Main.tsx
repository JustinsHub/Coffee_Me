import React, { useEffect, useState } from "react";
import NewFact from "./NewFact";
import CoffeeFacts from "../api/coffeeFactsAPI";


const Main: React.FC = () => {
    const [coffeeFact, setCoffeeFact] = useState<any>([])
    //add an input for anybody to put in facts // Coffee Fact component

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

    const getNewCoffeeFact = async () => {
        try {
            const coffeeData = await CoffeeFacts.getAllCoffeeFacts()
            const coffeeFacts = coffeeData.data
            const randomCoffeeFact = Math.floor(Math.random() * coffeeFacts.length)
            setCoffeeFact(() => coffeeFacts[randomCoffeeFact].coffee_facts)
        } catch (error) {
            return error
        }
    }
       
    return (
        <div>
            Coffee Facts:
            <ul>
                {coffeeFact}
            </ul>

            <div>
            <NewFact/>
            <button className="btn btn-primary" onClick={getNewCoffeeFact}>Random Fact</button>
            </div>
        </div>
        )
}

export default Main