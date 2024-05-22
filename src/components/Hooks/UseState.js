import React, { useState } from 'react'
import "./Hooks.css"

const UseState = () => {
const [count, setCount] = useState(0)
const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
})

const handleout = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev)=>{
        return {...prev, [name]: value};
    })
    
}

  return (
    <>
        <h1 className="title">UseState</h1>
        <div className="usestate">
            <button onClick={()=>{setCount(count+1)}}>+</button>
            <input type="text" value={count} onChange={(e)=>{ setCount(e.target.value) }} name="" />
            <button onClick={()=>{count > 0 ? setCount(count-1): setCount(count-0)}}>-</button>
        </div>

        <div className="form__outer">
        <h1 className="form__title">Register Form</h1>
            <form>
                  <input type="text" name="username" value={formData.username} onChange={handleout} placeholder="Name" />
                  <input type="email" name="email" value={formData.email} onChange={handleout} placeholder="Email" />
                  <input type="password" name="password" value={formData.password} onChange={handleout} placeholder="Password" />
                  <input type="password" name="confirm_password" value={formData.confirm_password}  onChange={handleout} placeholder="confirm-Password" />  
                  <button>Create Account</button>
            </form>

            <div style={{margin: "25px"}}> My Name is <b> {formData.username} </b> and My Email is <b>{formData.email}</b></div>

        </div>

    </>
  )
}

export default UseState;
