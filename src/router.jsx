import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomeComponent from './navbar-items/home'
import EducationComponent from './navbar-items/education'
import NavbarComponent from './navbar'
import PersonalComponent from './navbar-items/personal'
import SettingComponent from './navbar-items/setting'


const RouterComponent = () => {
  return (
    <BrowserRouter>
       <NavbarComponent/>
    <Routes>
    
        <Route path='/home' element={<HomeComponent/>}/>
        <Route path='/education' element={<EducationComponent/>}/>
        <Route path='/personal' element={<PersonalComponent/>}/>
        <Route path='/setting' element={<SettingComponent/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent  