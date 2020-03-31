import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import PrivateRoute from './user/PrivateRoute'
import UserDashBoard from './user/Dashboard'
import AdminDashBoard from './admin/AdminDashBoard'
import AdminRoute from './admin/AdminRoute'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/signup' exact component={Signup} />
                <Route path='/signin' exact component={Signin} />
                
                <Route path='/' exact component={Home} />
                <PrivateRoute path='/user/dashboard' exact component={UserDashBoard} />
                <AdminRoute path='/admin/dashboard' exact component={AdminDashBoard} />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes
