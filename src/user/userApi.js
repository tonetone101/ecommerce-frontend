import { API } from '../config'

exports.signup = (user) => {
    // console.log(user)
    return fetch(`${API}/signup`, {
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

exports.signin = (user) => {
    // console.log(user)
    return fetch(`${API}/signin`, {
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

// to save user information to localstorage
exports.authenticate = (data, next) => {
    if(typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data))
        next()
    }
}

exports.signout = (next) => {
    // to remove user information from localstorage
    if(typeof window !== 'undefined') {
        localStorage.removeItem('jwt')
        next()
    }
    // api call
    return fetch(`${API}/signout`, {
        method: "GET",
    })
    .then(res => {
        console.log('signout', res)
    })
    .catch(err => {
        console.log(err)
    })
}