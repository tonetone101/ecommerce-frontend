import React, {useState} from 'react'
import Layout from '../core/Layout'
import { API } from '../config'

const Signup = () => {
    //writing state with multiple properties using useState()
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const {name, email, password} = values

    // Higher Order Function(HOF), is a functiton returning another function
    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const signup = (user) => {
        // console.log(user)
        fetch(`${API}/signup`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error)
        })
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        // sending name, email, password of user property to backend by destructoring
        signup({name, email, password})

    }

    const signUpForm = () => (
        <form>
           <div className='form-group'>
                <label className='text-muted'>
                    Name
                </label>
                <input onChange={handleChange('name')} type='text' value={name} className='form-control' />
            </div>
            
            <div className='form-group'>
                <label className='text-muted'>
                    Email
                </label>
                <input onChange={handleChange('email')} type='email' className='form-control' />
           </div>

           <div className='form-group'>
                <label className='text-muted'>
                    Password
                </label>
                <input type='password' onChange={handleChange('password')} className='form-control' />
           </div>
           <button onClick={clickSubmit} className='btn btn-primary'>
               Sign Up
           </button>
       </form> 
    )
    
    return (
        <Layout className='container col-md-8 offset-md-2' title='Sign Up' description='Sign Up to E-commerce App'>
            {signUpForm()}
        </Layout>
    )
}

export default Signup