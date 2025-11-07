import React from 'react'
// import { Route, Router, Routes } from 'react-router-dom'
import Home from '../CRUD/Home'
import Login from '../CRUD/Login'
// import  "./HomeHeader.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeHeader from '../Project/HomeHeader';
import Navbar from '../Project/Navbar';
import HomeNavbar2 from '../Project/HomeNavbar2';

export default function Demo() {
  return (
    <div>
     {/* <Login/> */}
     {/* <Navbar/> */}
        <Router>
        <Navbar/>
        {/* <HomeHeader/> */}
            <Routes>
            
            <Route exact path="/" Component={Home} />
            <Route path='/login'Component={Login}/>
            <Route path='/homeNavbar2/homeHeader' Component={HomeNavbar2}/>
            <Route path='/homeHeader/:add2' Component={HomeHeader}/>
            <Route path='/navbar'Component={Navbar}/>
            </Routes>
        </Router>
     
    </div>
  )
}
