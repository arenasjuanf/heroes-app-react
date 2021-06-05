import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Route exact path="/login" component={ LoginScreen } />
                <Route exact path="/" component={  } />

               
                <Switch>
                  
                </Switch>
            </div>
        </Router>
    )
}
