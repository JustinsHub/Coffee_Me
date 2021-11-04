import React, {ChangeEvent, useState} from "react";
import { useHistory } from "react-router";
import AdminAuth from "../api/adminAuth";
import useLocalStorage from "../custom-hooks/useLocalStorage";


interface AdminI {
    username: string,
    password: string
}

const RegisterLogin: React.FC = () => {
    const history = useHistory()
    const adminToken:string = "token"
    const INITIAL_DATA = {
        username: "",
        password: ""
    }

    const [formData, setFormData] = useState(INITIAL_DATA)
    const [registerError, setRegisterError] = useState([]) //create UI error when error
    const [token, setToken]:any = useLocalStorage(adminToken)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData((state) => ({...state, [name]:value}))
    }

    const handleSubmit = async(e: React.SyntheticEvent) => {
        e.preventDefault()
        const registerAdmin: AdminI | any = await AdminAuth.registerAdmin(formData) //correct datatype? must have passed down token?
        if(registerAdmin.data){
            setToken(registerAdmin.data.accessToken)
        }
        // store token in local storage and pass it on http
        console.log(registerAdmin)
        console.log(token)
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
        {token}
    </div>
    )
}

export default RegisterLogin