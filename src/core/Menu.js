import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {signout, isAuthenticated} from '../user/userApi'

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return {
            color: '#ff9900'
        }
    } else {
        return {
            color: '#ffffff'
        }
    }
}

const Menu = ({history}) => {
   return ( 
        <div>
            <ul className="nav nav-tabs bg-primary">
                <li className='nav-item'>
                    <Link style={isActive(history, '/')} className='nav-link' to='/'>
                        Home page
                    </Link>
                </li>

                {isAuthenticated() && isAuthenticated().role !== 0 ? (
                    <div>
                        <li className='nav-item'>
                            <Link style={isActive(history, '/admin/dashboard')} className='nav-link' to='/admin/dashboard'>
                                Admin
                            </Link>
                        </li>
                    </div>
                ) : (
                    <li className='nav-item'>
                        <Link style={isActive(history, '/user/dashboard')} className='nav-link' to='/user/dashboard'>
                            DashBoard
                        </Link>
                    </li>
                )}

               {!isAuthenticated() && (
                   <React.Fragment>
                        <li className='nav-item'>
                            <Link style={isActive(history, '/signin')} className='nav-link' to='/signin'>
                                Sign In
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link style={isActive(history, '/signup')} className='nav-link' to='/signup'>
                                Sign Up
                            </Link>
                        </li>
                   </React.Fragment>
               )}

                {isAuthenticated() && (
                    <li className='nav-item'>
                        <span style={{cursor: 'pointer', color: '#ffffff'}} className='nav-link' onClick={() => signout(() => {
                            history.push('/')
                        })}>
                            Sign out
                        </span>
                    </li>
                )}
                
            </ul>
        </div>
   )
}

export default withRouter(Menu)