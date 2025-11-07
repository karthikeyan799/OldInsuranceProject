import React, { Component } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from '../CRUD/Home'
import Login from '../CRUD/Login'
import Registration from '../CRUD/Registration'

export default class Insert extends Component {
  render() {
    return (
      // <div>Insert</div>
      <div className="Insert">
      
      <Router>
       <Navbar/>
        <Routes>
          <Route  path="/home" Component={Home}/>
          <Route exact path="/login" Component={Login}/>
          <Route path="/registration" Component={Registration}/>
          {/* <Route path="/homeNavbar2" Component={HomeNavbar2}/> */}
        </Routes>
      </Router>
    </div>
    )
  }
}
