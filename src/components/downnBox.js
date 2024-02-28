import React from 'react'
import "./main.scss"
import image from "./images/image1.png"
import data from './data2'
function DownnBox() {
  return (
    <div>
    <div className='downCoin'>
    {data.map((data,index)=>(




<div key={index} className='downBox'>
<div className='image'>
<img src={data.image} className='img'  alt='auto' />

</div>
<div>
    <span>20% off</span>
    <span>Limited Time</span>
</div>
<div className='text3'>
    <h2>WebBuilder 1</h2>
    <h1>Computer  Modern clasic with wix support</h1>
    <h3>$39.9 <span>$49.96</span> <span>(20% off)</span></h3>
</div>
<button>View Details</button>


</div>


))}


    </div>
    <div className='dbox2'>
  <h4>
  Sign up and get exclusive special deals
  </h4>

  <button>Sign Up Now</button>

</div>

    </div>
  )
}

export default DownnBox