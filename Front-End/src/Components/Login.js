import React, { useState } from 'react'
import './Login.css'

function Login() {
const  empty={
  email:"",
  password:""
}

// state for handle the login inputs

const [handle, setHandle]= useState(empty)

const loginHandler=(e)=>{
  const {name, value}= e.target;
  setHandle({...handle,[name]:value})
  console.log(handle)
}


//function for login
const loginApi=async()=>{
  if(handle.email==""||handle.password==""){
    alert("Please Enter the Fields First")
  }else{
    let record= await fetch("http://localhost:4000/login",{
      method:"POST",
      headers:{
        "content-Type": "application/json",
       },
       body:JSON.stringify(handle)
    })
    record= await record.json()
    if(record.message=="Login Successfully"){
      // store id in SessionStorage
      sessionStorage.setItem("userId",record.LoginUser._id)
      sessionStorage.setItem("userEmail",record.LoginUser.email)
      alert("Login Successfully")

    }else{
      alert("Username and Passwor is invalid")
    }
  }
}



  return (
    <div className='wrapperL col-4'>
      <h2 className='text-center mt-4 text-danger'>LOGIN</h2>

      <div className='row'>
        <div className='col-10 container mb-4'>
          <form className='mt-2' 
          onSubmit={(e)=>{
            e.preventDefault()
          }}
          >
            <label>Enter Your Email</label>
            <input name='email' onChange={loginHandler} type='email' className='form-control'/>

            <label>Enter Password</label>
            <input name='password' onChange={loginHandler}  type='password' className='form-control'/>
            <div className="login-register col-12 p-1">
            <p>You do not have an account? <a href="/signup" className="login-link">Sign Up</a> </p>
          </div>
            <button onClick={loginApi} className='btn btn-primary'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
