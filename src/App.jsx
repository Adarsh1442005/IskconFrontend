import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route,Router } from 'react-router-dom'
import { IsconYouthForm } from './isconyouth'
import { YouthList } from './youthfronted'
import { AdminLogin } from './youthadmin'
import { IskconAzamgarh } from './iskonfront'


export function App() {
  return (
       <Routes>
        <Route path={"/" } element={<IskconAzamgarh/>}/>
        <Route path={"/iskon"} element={<IsconYouthForm/>}/>
        <Route path={"/frontyouth"}element={<YouthList/>}/>
         <Route path={"/youthadmin"}element={<AdminLogin/>}/>


       </Routes>


    
  )
  
}


