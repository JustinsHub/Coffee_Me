import React, {ChangeEvent, useState} from "react";
import { useHistory } from "react-router";
import AdminAuth from "../api/adminAuth";


interface AdminI {
    username: string,
    password: string
}

const RegisterLogin: React.FC = () => {
    const history = useHistory()
    const INITIAL_DATA = {
        username: "",
        password: ""
    }

    const [formData, setFormData] = useState(INITIAL_DATA)
    const [registerError, setRegisterError] = useState([]) //create UI error when error

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData((state) => ({...state, [name]:value}))
    }

    const handleSubmit = async(e: React.SyntheticEvent) => {
        e.preventDefault()
        const registerAdmin: AdminI | any = await AdminAuth.registerAdmin(formData) //correct datatype?
        //redirect page to review page from here is successfully registered
        // console.log(registerAdmin.headers) //create token from here?
        // console.log(registerAdmin.data) //create token from here?
        console.log(registerAdmin)
        return (registerAdmin.status === 201) ? history.push('/') : setRegisterError(registerAdmin.response.data.error.message)
    }

    return (
        //Implement a password to get to this route?
        //Have user be able to register as Admin
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            {registerError && registerError}
            <div>
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
                    onChange={handleChange}
                    />
                <button>Register</button>
            </div>
        </form>
    </div>)
}

export default RegisterLogin