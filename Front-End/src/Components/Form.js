import React from 'react'
import { useNavigate } from "react-router-dom";
import './Form.css';

function Form(props) {
  const navigate=useNavigate();
  const {createApi, handler,handle}= props
  return (
    <div className='container wrapperA col-6'>
        <h2 className='text-center text-danger mt-4'>Add Workout</h2>

      <form className='mb-4' onSubmit={(e)=>{
e.preventDefault()
createApi( );
navigate("/show")
      }}>
        <label  className='mt-3'>Enter Name</label>
        <input  required name="name" onChange={handler} type='text' className='form-control'/>

        <label>Enter Workout Activity</label>
        <input  required name="workout" onChange={handler} type='text' className='form-control'/>

        <label>Enter Workout Place</label>
        <input  required  name="place" onChange={handler} type='text' className='form-control'/>
        
        <label>Enter Date</label>
        <input  required  name="date" onChange={handler} type='text' className='form-control'/>
        
        <label>Enter Workout Duration</label>
        <input  required  name="time" onChange={handler} type='text' className='form-control'/>

        <button    className='btn btn-primary mt-3'>Save Data</button>
      </form>
    </div>
  )
}

export default Form
