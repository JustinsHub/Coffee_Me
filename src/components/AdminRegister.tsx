import React, {ChangeEvent, useState} from "react";

const RegisterLogin: React.FC = () => {
    const INITIAL_DATA = {
        username: "",
        password: ""
    }

    const [formData, setFormData] = useState(INITIAL_DATA)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData((state) => ({...state, [name]:value}))
    }

    const handleSubmit = () => {
        //request register and find out how to apply token...
    }

    return (
        //Implement a password to get to this route?
        //Have user be able to register as Admin
    <div>
        <form>
            <h1>Register</h1>
            <label>Username:</label>
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />
            <label>Password:</label>
            <input
            type="text"
            name="password"
            value={formData.password}
            />
        </form>
    </div>)
}

export default RegisterLogin