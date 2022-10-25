import React from 'react'
import rider from '../assets/rider.jpg'
import Lottie from 'react-lottie';
import * as animationData from '../assets/guy.json'
const UserData = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
  
      <div className='h-[350px] w-full flex  my-10 p-10 border  '>
        <div id='rider' className='w-1/3 border-2 solid  h-full' >
        <Lottie options={defaultOptions}
              // height={400}
              width={500}
          />
          
        </div>
        <div id='details'></div>
      </div>
    
  )
}

export default UserData
