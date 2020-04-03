import React, {useState, useEffect} from 'react'
import Layout from '../core/Layout'
import {isAuthenticated} from '../user/userApi'
import {createProduct} from './adminApi'
import { Link } from 'react-router-dom'
import AddCategory from './AddCategory'

const AddProduct = () => {
    const {user, token} = isAuthenticated()
    return (
        <Layout title='Add a new Product' description={`G'day ${user.name}, ready to add a new product?`} >
           <div className='row'>
               <div className='col-md-8 offset-md-2'>
                   ...
               </div>
           </div>

            
        </Layout>
    )
}

export default AddProduct