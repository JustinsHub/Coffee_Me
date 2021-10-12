import React, {ChangeEvent, SyntheticEvent, useState} from "react";
import ReviewFacts from "../api/reviewFactsAPI";
interface CoffeeFactInterface {
    coffeeFacts: string
}

const NewFact: React.FC = () =>{
    const INITIAL_DATA: CoffeeFactInterface = {
        coffeeFacts: ""
    }

    const [newCoffeeFact, setNewCoffeeFact ] = useState<CoffeeFactInterface>(INITIAL_DATA)

    const handleChange = (e: ChangeEvent<HTMLInputElement>):void => {
        const {name, value} = e.target
        setNewCoffeeFact((coffee) => ({...coffee, [name]:value })
        )}

        //When submitted, renders UI for submission "Your fact has been submitted and waiting for review"
    const handleSubmit = async(e:SyntheticEvent) => {
        e.preventDefault()
        try {
            const submitFact = await ReviewFacts.postReviewFact(newCoffeeFact.coffeeFacts)
            console.log(submitFact)
            return submitFact
        } catch (error) {
            return error
        }
    }

    //when we click button it turns into input?

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="coffeeFacts"
                value={newCoffeeFact.coffeeFacts}
                onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewFact
