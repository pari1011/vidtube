import React from 'react'
import home from '../assets/home.png';
import game_icon from '../assets/game_icon.png';
import automobiles from '../assets/automobiles.png';
import sports from '../assets/sports.png';
import entertainment from '../assets/entertainment.png';
import tech from '../assets/tech.png';
import music from '../assets/music.png';
import blogs from '../assets/blogs.png';
import news from '../assets/news.png';
import jack from '../assets/jack.png';
import megan from '../assets/megan.png';
import tom from '../assets/tom.png';
import simon from '../assets/simon.png';




const Sidebar = ({isOpen}) => {
  
  return (
    <div className=   {` ${isOpen ? 'w-auto' : 'w-auto'} py-5 px-7 flex flex-col justify-center  shadow-md  `}>
    
       <button
        className='flex gap-6 items-center hover: cursor-pointer '>
        <img src={home}/>
        <p className={`${isOpen ? 'block' : 'hidden'} `}>Home</p>
       </button>

       <button
        className='flex gap-5 items-center hover: cursor-pointer mt-5 '>
        <img  className='h-7'src={game_icon}/>
        <p className={`${isOpen ? 'block' : 'hidden'} `}>Gaming</p>
       </button>
       
       <button
        className='flex gap-5 items-center hover: cursor-pointer  mt-5'>
        <img  className='h-7'src={automobiles}/>
        <p className={`${isOpen ? 'block' : 'hidden'} `}>Automobiles</p>
       </button>

       <button
        className='flex gap-5 items-center hover: cursor-pointer mt-5 '>
        <img className='h-7' src={sports}/>
        <p className={`${isOpen ? 'block' : 'hidden'} `}>Sports</p>
       </button>

       <button
        className='flex gap-5 items-center hover: cursor-pointer  mt-5'>
        <img  className='h-7'src={entertainment}/>
        <p className={`${isOpen ? 'block' : 'hidden'} `}>Entertainment</p>
       </button>

       <button
        className='flex gap-5 items-center hover: cursor-pointer mt-5 '>
        <img className='h-7' src={tech}/>
        <p className={`${isOpen ? 'block' : 'hidden'} `}>Technology</p>
       </button>

       <button
        className='flex gap-5 items-center hover: cursor-pointer  mt-5'>
        <img  className='h-7'src={music}/>
        <p className={`${isOpen ? 'block' : 'hidden'} `}>Music</p>
       </button>

       <button
        className='flex gap-5 items-center hover: cursor-pointer mt-5 '>
        <img className='h-7' src={blogs}/>
        <p className={`${isOpen ? 'block' : 'hidden'} `}>Blog</p>
       </button>

       <button
        className='flex gap-5 items-center hover: cursor-pointer  mt-5'>
        <img  className='h-7'src={news}/>
        <p className={`${isOpen ? 'block' : 'hidden'} `}>News</p>
        
       </button>

       <hr className=  {`${isOpen ? 'w-35' : 'w-5'}   text-gray-400  mt-5`}/>
        {isOpen? <h4 className='text-gray-500 semibold mt-5 text-3l'> SUBSCRIBED</h4>: <> </>}
        <button
        className='flex gap-5 items-center hover: cursor-pointer  mt-5'>
        <img  className=' rounded-full w-5' src={tom}/>
        <p className={`${isOpen ? 'block' : 'hidden'} text-l `}>PewDiePie</p>
        
       </button>


       <button
        className='flex gap-5 items-center hover: cursor-pointer  mt-5'>
        <img  className=' rounded-full w-5' src={simon}/>
        <p className={`${isOpen ? 'block' : 'hidden'} text-l `}>MrBeast</p>
        
       </button>

       <button
        className='flex gap-5 items-center hover: cursor-pointer  mt-5'>
        <img  className=' rounded-full w-5' src={megan}/>
        <p className={`${isOpen ? 'block' : 'hidden'} text-l `}>Justin Bieber</p>
        
       </button>

       <button
        className='flex gap-5 items-center hover: cursor-pointer  mt-5'>
        <img  className=' rounded-full w-5' src={jack}/>
        <p className={`${isOpen ? 'block' : 'hidden'} text-l `}>Nas Daily</p>
        
       </button>
    </div>
  )
}

export default Sidebar
