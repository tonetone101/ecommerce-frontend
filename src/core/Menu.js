import React from 'react'
import {Link, withRouter} from 'react-router-dom'

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
            </ul>
        </div>
   )
}

export default withRouter(Menu)