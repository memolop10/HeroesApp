import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import { AuthContext } from '../auth/AuthContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from '../components/login/Login';
import DashboardRoutes from './DashboardRoutes';

const AppRouters = () => {

    const { user } = useContext( AuthContext )

    return (
        <Router>
            <div>
                
                <Switch>
                    <PublicRoute 
                        exact
                        path="/login" 
                        component={ Login }
                        isAuthenticated={ user.logged }
                    />

                    <PrivateRoute  
                        path="/" 
                        component={ DashboardRoutes }
                        isAuthenticated={ user.logged }
                    />
                </Switch>

            </div>
        </Router>
    )
}

export default AppRouters
