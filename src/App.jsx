import { useState } from 'react'
import Project from './pages/project/project'
import './App.css'
import Main from './pages/main'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './pages/about'

function App() {
  return (
<div
  className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
  style={{ 
    backgroundImage: "url('/assets/background.jpg')",
    backgroundColor: 'red' // Temporary - you'll see red if image fails to load
  }}
>
      {/* Router content */}
      <div className="relative z-10">
        <BrowserRouter>
          <Routes>
            <Route path={["/", "home"]} element={<Main />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}
 
export default App