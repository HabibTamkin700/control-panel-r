import React from 'react'
import Card from './card/Card'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useState } from 'react';
import { menu_icon } from './../utils/svgs';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div >
      {!isOpen && (
        <div className='w-full h-12 md:hidden flex items-center justify-center ml-4 cursor-pointer hover:bg-gray-200 smooth' onClick={()=>setIsOpen(!isOpen)}>
          {menu_icon}
        </div>
      )}
      <div className="md:w-[250px] h-[91%] hidden overflow-hidden md:flex flex-col items-center justify-between px-3">
      {/* cards */}

      <div className="pt-12 pb-4 border-b border-gray-900 w-full space-y-4 max-h-[400px] h-[350px] overflow-y-scroll scrollbar-hide">
        <Card type="mastercard"/>
        <Card type="visa"/>
      </div>

      <div className='flex items-center justify-center w-full border border-dashed rounded-lg my-2 py-2 border-gray-400'>
        <button className='w-full'>Add Card</button>
      </div>

      {/* footer  */}

      <div className='pb-2 pt-[150px] px-3 flex- flex-col space-y-4 items-start justify-between w-full h-full'>

      <div className='flex flex-col items-start justify-center w-full space-y-4 pb-6 border-b border-gray-900'>
        <a>Deposits</a>
        <a >Loyalty Program</a>
        <a>Loans</a>
      </div>
      <div className='space-y-3 text-black '>
        <h1 className=' font-bold text-lg'>AFGBANK</h1>
        <p className="text-s">2023 AFGBANK license #990 from 04-01-2023 </p>
      </div>
      </div>
      </div>


        <div  className="md:w-[250px] h-[91%]  overflow-hidden md:flex flex-col items-center justify-between px-3">
        <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={()=> setIsOpen(false)}
       
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />   
          <DrawerBody className="overflow-y-scroll scrollbar-hide">
         <div className="md:w-[250px] h-fit  md:flex flex-col items-center space-y-24 justify-between px-3">
      {/* cards */}

      <div className="pt-12 pb-4 border-b border-gray-900 w-full space-y-4 max-h-[400px] h-[350px] overflow-y-scroll scrollbar-hide">
        <Card type="mastercard"/>
        <Card type="visa"/>
      </div>

      <div className='flex items-center justify-center w-full border border-dashed rounded-lg border-gray-400'>
        <button className='w-full'>Add Card</button>
      </div>

      {/* footer  */}

      <div className='pb-2  px-3 flex- flex-col space-y-4 items-start justify-center w-full h-full'>

      <div className='flex flex-col items-start justify-center w-full space-y-4 pb-6 border-b border-gray-900'>
        <a className="footer-link">Deposits</a>
        <a className="footer-link">Loyalty Program</a>
        <a className="footer-link">Loans</a>
      </div>
      <div className='space-y-3 text-black '>
        <h1 className=' font-bold text-lg'>AFGBANK</h1>
        <p className="text-sm">2023 AFGBANK license #990 from 04-01-2023 </p>
      </div>
      </div>
      </div>
          </DrawerBody>      
        </DrawerContent>
      </Drawer>
    </div>     
    </div>
  )
}

export default Navbar
