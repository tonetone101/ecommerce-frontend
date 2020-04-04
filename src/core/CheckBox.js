import React, {useEffect, useState} from 'react'

const CheckBox = ({categories}) => (
    categories.map((c, i) => {
        return (
        <li key={i} className='list-unstyled'>
            <input type='checkbox' className='form-check-input'/>
            <label className='form-check-label'>
                {c.name}
            </label>
        </li>
        )
    })
)

export default CheckBox