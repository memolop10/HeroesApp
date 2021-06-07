import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
// import MarvelScreen from '../components/marvel/MarvelScreen';
// import Navbar from '../components/ui/Navbar';
import Login from '../components/login/Login'
import DashboardRoutes from './DashboardRoutes';

const AppRouters = () => {
    return (
        <Router>
            <div>
                
                <Switch>
                    <Route exact path="/login" component={ Login }/>
                    <Route  path="/" component={ DashboardRoutes }/>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouters
