import React from 'react'
import { mastercard_logo } from '../../utils/svgs'
import { visa_logo } from '../../utils/svgs'



function Card({type}) {
  return (
    <div className={`${type=== 'visa' ? "bg-[#e0e7ea]" : 'bg-black' } w-full founded-md py-3 px-3 space-y-16`}>
      <h1 className={` items-end justify-end flex w-full ${type=== 'visa' ? "text-black" : "text-gray-100"}`}>
        03/19/2023
      </h1>
      <div className='flex justify-center'>
         {type === 'mastercard' ? (
         <div >{mastercard_logo}</div>
         ) : (
         <div>{visa_logo}</div>
         )}
     

    <h1 className={`items-end justify-end flex self-center w-full ${type === 'visa' ? 'text-black' : 'text-gray-100'}`}>...50030</h1> 
    </div>
      
    </div>
  )
}

export default Card
