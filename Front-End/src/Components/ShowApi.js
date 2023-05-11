import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './ShowApi.css'

function ShowApi(props) {
 const [data,setData]= useState([]);

const fetchApi=async()=>{
    // fetch("http://localhost:4000/show").then((res)=>res.json())
    // .then((user)=>{
    //     setData(user)
    //     console.log(data)
    // })
var value=await fetch("http://localhost:4000/show")
value=await value.json()
setData(value)


}

//function for deleting the data
const delApi=async(id)=>{
  var data=await fetch(`http://localhost:4000/delete/${id}`,{
    method:"DELETE"
  })
  data=await data.json()
  fetchApi();
}
useEffect(()=>{
    fetchApi()
},[delApi])


return (
  <div className='container wrapperSApi'>
      <h2 className='text-center text-danger mt-3'>Show All Activities</h2>
      <table className='table mt-4'>
        <thead className='thead-dark'>

        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Workout Activity</th>
            <th>Workout Place</th>
            <th>Date</th>
            <th>Time</th>
            <th>Update</th>
            <th>Delete</th>
            
        </tr>
        </thead>
        {
            data.map((item)=>(
                <tr>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.workout}</td>
                    <td>{item.place}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td><Link to="/update"><button onClick={()=>props.editApi(item._id)} className='btn btn-outline-primary text-light'>EDIT</button></Link></td> 
                    <td><button onClick={()=>delApi(item._id)} className='btn btn-outline-danger text-light'>DELETE</button></td>

                </tr>
            ))  
        }
      </table>
      <div className="form-box login mt-5 mb-2">
      <h3 className="text-center text-primary">Add Workout Activity</h3>
      <form action="#" className="p-2">
<div className='pt-2 col-12'>
<a type="submit" href='/add' className="btn btn-primary col-12">Add New Activity</a>
</div>
      </form>
    </div>
    </div>
  )
}

export default ShowApi
