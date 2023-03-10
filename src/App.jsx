import React from 'react'
import {Routes,Route } from "react-router-dom"
import NavigationBar from './components/NavigationBar'
import AddNewJobs from './pages/AddNewJobs'
import EditJobs from './pages/EditJobs'
import Home from './pages/Home'
function App() {

  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit/:id' element={<EditJobs/>}/>
        <Route path='/add' element={<AddNewJobs/>}/>
      </Routes>
    </div>
  )
}

export default App
