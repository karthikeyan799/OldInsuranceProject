import React, { Component } from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Header1 extends Component {
  render() {
    return (
    //   <div>Header</div>
    
<div>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
           <img src="D:\Insurance/insur.jfif" alt="bootsrap" width="50" height="50"/>
           <span className='fa fa-user' style={{width:"40px" ,height:"30px",backgroundColor:"green"}}></span>
           <div className="navbar-brand">INSURANCE</div>
         {/* <a class="navbar-brand" href="#">Navbar</a>   */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home" >Home</Link>
                {/* <Link className="nav-link active" to="/add2">Link</Link> */}
              </li>&nbsp;
             
             
              {/*   <li className="nav-item dropdown">
            <NavDropdown title="CRUD" id="basic-nav dropdown" role='button'>
                <NavDropdown.Item href="">Add</NavDropdown.Item>
                <NavDropdown.Item href="/update/:customerId"> Update</NavDropdown.Item>
                <NavDropdown.Item href="/fetchById">FetchById</NavDropdown.Item>
                <NavDropdown.Item href="/fetchAll">FetchAll</NavDropdown.Item>
              </NavDropdown></li> */}
              {/* <li className="nav-item dropdown">
              <NavDropdown title="Policy" id="basic-nav dropdown" role='button'>
                <NavDropdown.Item href="/add2">Add</NavDropdown.Item>
                <NavDropdown.Item href="/update/:customerId"> Update</NavDropdown.Item>
                <NavDropdown.Item href="/fetchById">FetchById</NavDropdown.Item>
                <NavDropdown.Item href="/fetchAll">FetchAll</NavDropdown.Item>
              </NavDropdown></li> */}

              <li className="nav-item dropdown">
              <NavDropdown title="JPQL" id="basic-nav dropdown" role='button'>
                <NavDropdown.Item href="/add2">Add</NavDropdown.Item>
                <NavDropdown.Item href="/update/:customerId"> Update</NavDropdown.Item>
                <NavDropdown.Item href="/fetchById">FetchById</NavDropdown.Item>
                <NavDropdown.Item href="/fetchAll">FetchAll</NavDropdown.Item>
              </NavDropdown></li>              
              {/* <li className="nav-item">
                <Link className="nav-link  active" href="log.html">LogUp</Link>
              </li> */}
            </ul>
         
          </div>
        </div>
      </nav>
      <div className="nav"></div>
      </div>
    )
  }
}
