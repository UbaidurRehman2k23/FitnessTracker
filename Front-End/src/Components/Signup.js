import React, { useState } from 'react'
import './Signup.css'

function Signup() {
// state for handling the inputs
 const empty={
    name:"",
    email:"",
    password:""
 }
const [handle,setHandle]=useState(empty)
const accountHandler=(e)=>{
    const {name , value} = e.target;
    setHandle({...handle,[name]:value})
    console.log(handle)
}
    const createUser=async()=>{
        if(handle.name==""||handle.email==""||handle.password=="")
        {
            alert("Please Enter the Input Fields First")
        }else{
            let record= await fetch("http://localhost:4000/signup",{
                method:"POST",
                headers:{
                    "content-Type": "application/json",
                   },
                   body:JSON.stringify(handle)
            })
            record= await record.json()
            if(record=="Email Already Exist")
            {
                alert("Email Already Exist")
            }else{
                alert("User Created Successfully")

            }
        }
    }


  return (
    <div className='wrapperS col-5'>
      <h2 className='text-center text-danger mt-3'>Sign Up</h2>
   <div className='container'>
   <div className='row'>
   <div className='col-12'>
    <form className='mt-2 mb-4'>
        <label>Enter Your Name</label>
        <input name="name" onChange={accountHandler} type='text' className='form-control'/>

        <label>Enter Your Email</label>
        <input name="email"  onChange={accountHandler} type='email' className='form-control'/>

        <label>Enter Password</label>
        <input name="password"  onChange={accountHandler} type='password' className='form-control'/>
        <div className="login-register col-12 p-1">
            <p>Already have an account? <a href="/login" className="login-link">Login</a> </p>
          </div>
        <button onClick={createUser} className='btn btn-primary'>Create Account</button>
    </form>
   </div>


   </div>

   </div>
    </div>
  )
}

export default Signup
