 
import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
        <Nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
               
                <button className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
              <Nav className="justify-content-end" >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className='nav-item'>
                {/* <Link className="nav-item active"to="/home">Home</Link>&nbsp; */}
                <Link className="btn btn-outline-light"to="/home">Home</Link>&nbsp;
                </li>
                <li className='nav-item'>
                <Link className="btn btn-outline-light"to="/Log">LogIn</Link>
               
                </li>
                <li className='nav-item'>
                <Link className="btn btn-outline-light"to="/login2">LogIn</Link>
               
                </li>
                <li className='nav-item'>
                <Link className="btn btn-outline-light"to="/log">LogIn</Link>
               
                </li>
                </ul>
                </Nav>
               
                 {/* <Link className="nav-item"to="/home">Home</Link>&nbsp;
                 <Link className="btn btn-outline-light"to="/login">LogIn</Link> */}
                {/* <link className="btn btn-outline-light" to="/insert">LogIn</link> */}
          </div>
        </Nav>
    </div>
  )
}
