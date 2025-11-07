import React, { Component } from 'react'
import { Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary"> {/* <Navbar className="navbar navbar-dark bg-primary"> */}
          <div className='container-fluid'>
          <Navbar.Brand href="#home">
            <img
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            INSURANCE Application System
              </Navbar.Brand>
              <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>

              </button>
            <NavLink className="btn btn-outline-light" to="">LogIn</NavLink>
        
              </div> 
      </nav>  
      </div>
    )
  }
}
