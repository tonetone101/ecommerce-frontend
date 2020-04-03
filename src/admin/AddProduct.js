import React, {useState, useEffect} from 'react'
import Layout from '../core/Layout'
import {isAuthenticated} from '../user/userApi'
import {createProduct} from './adminApi'
import { Link } from 'react-router-dom'
import AddCategory from './AddCategory'

const AddProduct = () => {
    const {user, token} = isAuthenticated()
    // defining our state into values with useState
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        categories: [],
        category: '',
        shipping: '',
        quanity: '',
        photo: '',
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    })

    // destructuring our state from values
    const {
        name,
        description,
        price,
        categories,
        category,
        shipping,
        quanity,
        photo,
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData,
    } = values

    const newProductForm = () => (
        <form className='mb-5'>
            <h4>Post Photo</h4>
            <div className='form-group'>
                <label className='btn btn-secondary'>
                    <input type='file' name='photo' accept='image/*' />
                </label>
            </div>

            <div className='form-group'>
                <label>
                    Name
                </label>
                <input type='text' className='form-control' />
            </div>
        </form>
    )

    return (
        <Layout title='Add a new Product' description={`G'day ${user.name}, ready to add a new product?`} >
           <div className='row'>
               <div className='col-md-8 offset-md-2'>
                   {newProductForm()}
               </div>
           </div>

            
        </Layout>
    )
}

export default AddProduct