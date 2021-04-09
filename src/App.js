import './Components/NavigationBar/main.css'
import './Components/sidabars/main.css'
import React from 'react'
import Navbar from './Components/js/Navbar'
import Sidebar from './Components/js/Sidebar'

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
    </>
  )
}



