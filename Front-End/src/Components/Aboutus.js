import React from 'react'

function Aboutus() {
  return (
    <div className='fbox pb-5 pt-2'>

<div className="col-md-6 d-inline-flex">
    
    <div className='col-md-12 text-center'>
    <h1 className='pt-3 mb-3'>Show Message</h1>
    </div>

</div>

<div className="col-md-6 d-inline-flex">

    <div className='col-md-12 text-center '>
    <h1 className='pt-3 mb-3'>About Us</h1>
    <input className='form-control' type="text" placeholder='Your Name'/><br />
    <input className='form-control' type='email' placeholder='Your Email'/><br />
    <textarea className='form-control' placeholder='Message Here . . . ' name='message'></textarea>
    </div>
</div>

    </div>
  )
}

export default Aboutus