import React from 'react'
import { useState } from "react";
import { auth,provider } from '../../firebase';
import { signInWithPopup, signOut } from "firebase/auth";
import menu from '../assets/menu.png';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import upload from '../assets/upload.png';
import more from '../assets/more.png';
import notification from '../assets/notification.png';






const Navbar = ({ onToggleSidebar }) => {

  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }


  };

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <nav className='flex justify-between px-5 py-3 shadow-md '>
        <div className='flex items-center gap-5'>
            <button
            onClick={ onToggleSidebar }>
                <img className='h-4 hover:cursor-pointer ' src={menu}/>
            </button>
            
            <img className='h-8 hover:cursor-pointer ' src={logo}/>
           

        </div>
        <div className='flex border-2 rounded-full border-gray-200 px-3'>
            <input className='  p-1 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 focus:outline-none' type="text" placeholder='search'/>
             <button>
                <div className='flex justify-center items-center  hover:cursor-pointer'>
                    <img className='h-4' src={search}/>
                </div>
             </button>
        </div>
           
       {!user?  <div  className='flex justify-center items-center border-2  border-gray-300 rounded-full p-1 text-gray-800 '>
                <button  className='hover: cursor-pointer'onClick={handleSignIn} > Sign In</button>
                 
                </div>: 
                <div  className='flex items-center gap-5'> 
                    <img  className='h-7  ' src={upload}/>
                    <img  className='h-7  ' src={more}/>
                    <img  className='h-7 ' src={notification}/>
                    <img  className='h-7 rounded-full  ' src={user.photoURL}/>
                    

                </div>
         
        }
       

        
      
    </nav>
  )
} 

export default Navbar
