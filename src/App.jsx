import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import VolunteerForm from './VolunteerForm'
import ScamReportForm from './ScamReportForm'
// import './App.css'

function App() {
  
  // All routes placed here.

  return (
    <>
   <h1>Hello Team B.</h1>
   <VolunteerForm/>
   <ScamReportForm/> 
    </>
  )
}

export default App
