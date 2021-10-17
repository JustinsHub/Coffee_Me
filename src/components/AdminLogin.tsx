import React from "react";

const AdminLogin: React.FC = () => {
    //must be a secret way to login admin // make it a protected route by password?
    //create register
    //create login
    //when logged in redirects to reviews page for admin ready to approve or reject a fact. (fact and approve/reject/edit?)
    //admin can see all facts that are approved and must be protected routes.

    return (
    <div>
        <form>
            <h1>Login</h1>
            <label>Username:</label>
            <input
            type="text"
            name=""
            value=""
            />
            <label>Password:</label>
            <input
            type="text"
            name=""
            value=""
            />
        </form>
    </div>)
}

export default AdminLogin