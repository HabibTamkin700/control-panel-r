import React from 'react'

function Transfer() {
  return (
    <div   className="w-full flex flex-col items-center justify-center px-2 py-2 ">
      <h1 className="text-md w-full py-6">
        <b classname="text-4xl">Transfer</b> to Visa or MasterCard
      </h1>
      <div calssName="grid grid-cols-3 gap-4 w-full">
        <div className="col-span-3 border-b border-black space-x-4 flex items-center justify-between w-full py-3 px-3">
          <h1 className="border-r self-center border-black w-[25%]">From</h1>
          <h1 className="w-[50%] self-center">MasterCard... 30600</h1>
          <h1 className="font-bold text-2xl w-[25%] items-end justify-end flex">500,209$</h1>
        </div>

            <div className="col-span-3 border-b border-black space-x-4 flex items-center justify-between w-full py-3 px-3">
          <h1 className="border-r self-center border-black w-[25%]">To</h1>
          <h1 className="w-[50%] self-center">40 123 564 340 600</h1>
          <div className="w-[25%] items-end justify-end flex">
                            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                   d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />

                </svg>



          </div>
      </div>
      <div className="col-span-3 space-x-4 flex items-center justify-between w-full py-3 px-3">
        <div className="w-[40%] flex space-x-4 border-b border-black py-4">
          <h1 calssName="border-r border-black w-full self-center">Amount</h1>
          <input type="number"  className="w-full input text-xl font-bold"/>
        </div>
        <div className="w-[40%] flex space-x-4 border-b border-black py-4">
          <h1 calssName="border-r border-black w-full self-center">CW</h1>
          <input type="number"  className="w-full input"/>
        </div>
        
      <div className="w-[10%] smooth btn py-3 px-2 items-center justify-center flex">
        <button>{">"}</button>
      </div>
      </div>
      
    </div>
    </div>
  )
}

export default Transfer
