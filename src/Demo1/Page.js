import React, { Component } from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Page1 from './Page1'
import Page2 from './Page2'

export default class Page extends Component {
  render() {
    return (
      <div>
        <Router>
            <Routes>
                <Route path='/page2/:name/:id' Component={Page2}></Route>
                <Route path='/page3' Component={Page}/>
                <Route exact path='/' Component={Page1}/>
            </Routes>
        </Router>
      </div>
    )
  }
}
