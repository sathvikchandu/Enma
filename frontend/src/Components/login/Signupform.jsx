import React from 'react'
import './Signupform.css'
import {useState} from 'react'

function Signupform(props) {
    const [focused,setFocused]=useState(false)
    const {label,onChange,id,errorMessage, ...inputProps}=props
    const handleFocus=(e)=>{
        setFocused(true)
    }

    return (
    <div className='forminput'>
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
        <span>{errorMessage}</span>

    </div>
  )
}

export default Signupform