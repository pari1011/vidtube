import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'


  const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
  return (
    <div>
      
     <Navbar  onToggleSidebar={toggleSidebar} />
     <Routes>
       <Route path="/" element={<Sidebar isOpen={isSidebarOpen}/>}/>
     </Routes>
    </div>
  )
}

export default App
