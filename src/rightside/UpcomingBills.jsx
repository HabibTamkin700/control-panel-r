import React from 'react'
import { Data_bills } from '../data'

function UpcomingBills() {
  return (
    
  
    <div  className="flex flex-col items-center justify-center w-full  space-y-6  py-2 px-2">
      <div className="flex w-full items-center justify-between">
        <h1 className="font-bold text-3xl">Upcoming Bills</h1>
          <div className="py-2 px-2 bg-gray-100">
            <svg xmlns='https://www.w3.org/2000/svg' className='h-6 w-6 cursor-pointer rotate-[-45deg]' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
              <path strokeLinecap='round' strokeLinejoin='round' d="M14 517 7m0 01-7 7m7-7H3"/>
            </svg>
          </div>   
      </div>

      <div className='grid grid-cols-3 w-full gap-x-4 items-center justify-center'>
        {Data_bills.map(({color, id, title, price, icon})=>(
          <div className={`${color} pb-6 pt-6 rounded-md px-3 w-full flex flex-col items-start justify-start`}>
            <div className={`pt-2 ${title === "Tinder Gold" && "bg-gray-100 gounded-full pb-2 px-2 mb-2"}`}>
              {icon}
            </div>
            <h1 className={`text-md pb-6 pt-2 ${id === 2 ? "text-gray-100" : "text-black"}`}> {title} </h1>

            <h1 className={`text-xl font-bold ${id === 2 ? "text-gray-100" : "text-black"}`}>{price}</h1>
            <p className={`text-sm ${id === 2 ? "text-gray-100/50" : "text-gray-600"}`}>/Month</p>
          </div>
        ))}
      </div>
      <div className='flex w-full bg-gray-100 rounded-md px-3 py-4 items-start justify-start space-x-6'>
        <div className='bg-black rounded-full py-2 px-3'>
                           <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className='h-8 w-8 fill-gray-100'
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                    />
                  </svg>

        </div>
        <div className='flex flex-col items-start space-y-4 justify-start w-full'>
          <h1>You have 2,455 $ remaining funds over the next 18 days</h1>
          <div className="flex items-start text-[#3c45a0] font-medium space-x-4 w-full justify-start">
            <a>View Details</a>
            <h1>{">"}</h1>
          </div>
        </div>
      </div>
    </div>
 
  )
}

export default UpcomingBills
