import React from "react";
import  {Switch, Route} from 'react-router-dom'
import AdminLogin from "./AdminLogin";
import Main from "./Main";

//Make Routes just for admin login/
//Admin login redirected to AdminPage
//AdminPage has all the reviews ready to approve/reject
//Find out how to have token on admin
const Routes:React.FC = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/admin-login">
                    <AdminLogin/>
                </Route>

                <Route exact path ="/">
                    <Main/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes