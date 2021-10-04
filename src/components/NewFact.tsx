import React, {ChangeEvent, useState} from "react";


const NewFact: React.FC = () =>{

    interface CoffeeFactInterface {
        coffeeFacts: string
    }
    const INITIAL_DATA: CoffeeFactInterface = {
        coffeeFacts: ""
    }

    const [newCoffeeFact, setNewCoffeeFact ] = useState<CoffeeFactInterface>(INITIAL_DATA)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setNewCoffeeFact((coffee) => ({...coffee, [name]:value })
        )}

    const handleSubmit = () => {
        //submits to reviews
    }

    //when we click button it turns into input?

    return (
        <div>
            <form>
                <input
                type="text"
                name="coffeeFacts"
                value={newCoffeeFact.coffeeFacts}
                onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default NewFact
