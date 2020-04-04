import React, {useEffect, useState} from 'react'
import Layout from './Layout'
import {getProducts} from './apiCore'

const Home = () => {
    const [productsBySell, setProductsBySell] = useState([])
    const [productsByArrival, setProductsByArrival] = useState([])
    const [error, setError] = useState(false)

    // show products that have been sold
    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setProductsBySell(data)
            }
        })
    }

    // show products that are newly created
    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setProductsByArrival(data)
            }
        })
    }

    useEffect(() => {
        loadProductsByArrival()
        loadProductsBySell()
    }, [])

    return (
        <Layout title='Home Page' description='E-commerce App'>
            {JSON.stringify(productsByArrival)}
            <hr/>
            {JSON.stringify(productsBySell)}
        </Layout>
    )
}

export default Home