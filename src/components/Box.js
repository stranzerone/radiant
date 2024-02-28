// NewComponent.js

import React from 'react';
import './main.scss';
import image from "./images/image1.png"
import StarRating from './StartRating';
import data from './data';
const NewComponent = () => {


    
  return (<div>

{data.map((data,index)=>(




    <div key={index} className="new-component">
      <div className="left-column">
      <img src={image } alt='auto' />
      </div>
      <div className="center-column">
<h1>
<span>
{data.t1}
</span>
{data.text1}
</h1>
<span>Main Highlight</span>
<h1 className='ms-3'>
{data.text2}
</h1>

<h3>
    Show More
</h3>
      </div>
      <div className="right-column">
       <div>
        <h4>{data.Rating}</h4>
        <h3>{data.comment}</h3>
        <StarRating rating={data.Rating}/>
        
       </div>
       <button>View</button>
      </div>
    </div>
    ))}
    </div>
  );
}

export default NewComponent;
