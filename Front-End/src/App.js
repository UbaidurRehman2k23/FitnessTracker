import React, { useState } from 'react'
import ShowApi from './Components/ShowApi'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './Components/Header'
import Form from './Components/Form'
import Home from './Components/Home'
import Update from './Components/Update';
import Login from './Components/Login';
import Signup from './Components/Signup';
 
function App() {
  //state for editing the data
   const [Getid, SetGetid]= useState()
  const empty={
    name:"",
    workout:"",
    place:"",
    date:"",
    time:"",
  }
  //state for handling input
  const [handle, setHandle]=useState(empty)

// function for handle the input fields
const handler=(e)=>{
 const {name,value}=e.target;
 setHandle({...handle,[name]:value})
 console.log(handle)
}

// function for creating the Api data
const createApi=()=>{
  fetch("http://localhost:4000/create",{
    method:'POST',
    headers:{
     "content-Type": "application/json",
    },
    body:JSON.stringify(handle)
  })
  }
// function for editing the Api
 const editApi=async(id)=>{
var data= await fetch(`http://localhost:4000/get/${id}`);
data=await data.json()
console.log(data)
setHandle(data)
SetGetid(id)
  }
// function for updating the Api
const updateApi=()=>{
fetch(`http://localhost:4000/get/${Getid}`,{
  method:'PUT',
  headers:{
    "content-Type": "application/json",
   },
   body:JSON.stringify(handle)
   
})

}
  return (
    <div>
       <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/show" element={<ShowApi editApi={editApi}/>}/>
          <Route path="/add" element={<Form createApi={createApi} handle={handle} handler={handler}/>   }/>
          <Route path="/update" element={<Update updateApi={updateApi} handle={handle} handler={handler}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup />}/>

         </Routes>
       </Router>
    </div>
  )
}

export default App
