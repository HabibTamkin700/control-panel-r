import React from 'react';
import {useState} from 'react'
import NavLink from './links/NavLink.jsx';
import { nav_icon, search_icon } from '../utils/svgs.jsx';
import {notif_icon} from '../utils/svgs.jsx';

let navLinks = ['Payments', 'Employees', 'Account', 'Admin', 'Overview'];
let userImg = 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60';


function Header() {
  const [active, setActive] = useState("Overview");
  return (
      <div className="items-center jsutify-between flex w-full space-x-4 pb-3 pt-4 px-3">

       <div className='border-b border-gray-900 w-[25%] flex  md:space-x-2  md:pb-6  pb-2 items-center justify-center md:justify-start'>

        <img className='md-w-12 md:h-12 w-10 h-10' src='https://cdn3.vectorstock.com/i/1000x1000/22/52/bank-building-icon-simple-style-vector-8872252.jpg' alt='logo'/>

      <h1 className="self-center hidden md:inline md:font-bold md:text-xl text-md">AFGBANK</h1>
       </div>
        <div className="border-b pb-5 border-gray-900 w-[140%] items-center justify-center flex space-x-2">

          {
           navLinks.map((link,index)=>(
                <div onClick={()=> setActive(link)} className="relative flex items-center justify-center " key={index}>
                  <NavLink title={link} /> 
                  <div className={`${link ===active ? "items-center justify-center flex  absolute -bottom-3 ": "hidden"}`}>{nav_icon}</div>
                
                </div>           
          ))}
        </div>

            <div className="border-b border-gray-900 pb-6 pt-4 hidden md:flex items-center justify-center px-3 space-x-6 w-[60%]">
            <div>  {search_icon} </div>
              <div>{notif_icon}</div>
              <img src={userImg} alt="userImage" className='w-8 h-8 rounded-full object-center object-cover'/>
            </div>


    
      </div>

  )
}

export default Header
