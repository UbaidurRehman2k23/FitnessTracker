import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Update.css'

function Update(props) {

    const navigate=useNavigate();
    const {handle,handler,updateApi}= props;
  return (
    <div className='container wrapperU col-6'>
    <h2 className='text-center text-danger'>Edit Your Workout</h2>
      <form className='mb-3' onSubmit={(e)=>{
e.preventDefault()
 updateApi()
 navigate("/show")
      }}>
        <label  className='mt-2'>Enter Name</label>
        <input value={handle.name} onChange={handler} required name="name"  type='text' className='form-control'/>

        <label>Enter Workout type</label>
        <input  value={handle.workout}  onChange={handler}  required name="workout"  type='text' className='form-control'/>

        <label>Enter Workout Place</label>
        <input   value={handle.place}  onChange={handler} required  name="place"  type='text' className='form-control'/>
       
        <label>Enter Date</label>
        <input   value={handle.date}  onChange={handler} required  name="date"  type='text' className='form-control'/>
       
        <label>Enter Workout Duration</label>
        <input   value={handle.time}  onChange={handler} required  name="time"  type='text' className='form-control'/>

        <button    className='btn btn-primary mt-3'>Update Workout</button>
      </form>
    </div>
  )
}

export default Update
