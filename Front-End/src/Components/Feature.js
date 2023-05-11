import React from 'react'
import FeatureBox from './FeatureBox'
import lifting from './Pictures/lifting.svg'
import cycling from './Pictures/cycling.svg'
import running from './Pictures/run.svg'
import meditation from './Pictures/meditation.svg'


function Feature() {
  return (
    <div className='fbox '>
        <h1 className='text-center p-4'>Features</h1>
        <div className="container d-flex">
            <FeatureBox image={lifting} title={"Weight Lifting"} />
            <FeatureBox image={cycling} title={"Cycling"} />
            <FeatureBox image={running} title={"Running"} />
            <FeatureBox image={meditation} title={"meditation"} />
        </div>
    </div>
  )
}

export default Feature