import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import PrivateRoute from './user/PrivateRoute'
import DashBoard from './user/Dashboard'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/signup' exact component={Signup} />
                <Route path='/signin' exact component={Signin} />
                
                <Route path='/' exact component={Home} />
                <PrivateRoute path='/dashboard' exact component={DashBoard} />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes
