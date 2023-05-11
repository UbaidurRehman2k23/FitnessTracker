import React from 'react'

function FeatureBox(props) {
  return (
    <div className='container col-md-3 fbox p-4'>
<div className="col-md-8">
    <img src= {props.image} alt="" />
</div>
<div className="col-md-12 mt-5 mb-4">
    <h2>{props.title}</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptas laborum officia repellat repellendus iure?</p>
</div>
    </div>
  )
}

export default FeatureBox