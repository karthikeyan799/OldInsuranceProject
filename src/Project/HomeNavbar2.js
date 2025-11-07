import React, { Component } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class HomeNavbar2 extends Component {
  constructor(props){
    super(props);
    this.state={
      display:true
    }
  }
  // hide=()=>{
  //   if(this.state.display==true){
  //     this.setState({"display":false})
  //   }else{
  //     this.setState({"display":true})
  //   };
  // }
  handleLogin=()=>{
    this.state({display:true});
  };
  handleLogout=()=>{
    this.state({display:false});
  }
  show=()=>{
    if(this.state.display===true){
      this.setState({"display":true})
    }else{
      this.setState({"display":false})
    };
  }
  render() {
    // var params=this.props.match.params;
    // const {display}=this.state;cmd
    const {loggedIn}=this.props;
    // const {loggedOut}=this.props;cmd
    // const {hid}=this.hide();
    return (
      <div>
        {/* <Nav className="navbar navbar-expand-lg fixed-top navbar-light bg-success"> */}
        {/* <Nav className="navbar fixed-top navbar-light bg-success "> */}
        <Nav className="navbar navbar-expand-lg navbar-light bg-success">
          <div className="container-fluid">
            <div className="navbar-header">
            <h2 className="navbar-brand" style={{ color: "black" }}>
              INSURANCE aPPLICATION Home
            </h2>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span className="navbar-toggler-icon"></span> */}
            </button>
            {/* <button className="btn btn-outline-light" href="/insert">LogIn</button> */}
        
            <Nav className="justify-content-end">
              {/* <Link className="btn btn-outline-light" to="/insert">Insert</Link>&nbsp;
                <Link className="btn btn-outline-light" to="/insert">Insert</Link>&nbsp;
                <Link className="btn btn-outline-light" to="/insert">Insert</Link>&nbsp; */}
              {/* <Link className="btn btn-outline-light" to="/fetchAll">Customer</Link>&nbsp;  */}
           
              {/* {this.state.disply ?  <Nav> */}
              {/* {logge="btn btn-outline-light" to="/log">
            LogIn
          </Link> </Nav>)}
          {/* <Route path="/log" render={(props)=>(<Log{...props}onLogin={this.handleLogin}/>)}  */}
          {/* // </Nav>)} */}
          {/* // : */}
          {/* <Nav> */}
          {/* <Link className="btn btn-outline-light" to="/login">
            LogIn
          </Link>  */}
           {!loggedIn &&(
           <Nav>

              <Link className="btn btn-outline-light" to="/" onClick={this.hide}>
              Home</Link>
         
             
            <Link className="btn btn-outline-light" to="/log">Login</Link>
            </Nav>
           )} 
           {/* {(loggedIn||loggedOut) && (<Nav> */}
           {/* {loggedIn && (<Nav> */}
              <Link className="btn btn-outline-light" to="/findByName">
                FindByName
              </Link>
              
              <Link className="btn btn-outline-light" to="/registration">
                Regis
              </Link>
              <Link className="btn btn-outline-light" to="/fetchAll2">
                all2
              </Link>
              <Link className="btn btn-outline-light" to="/byName">
               ByName
              </Link>
             
              <NavDropdown title="CRUD" id="basic-nav-dropdown">
                <NavDropdown.Item href="/add2">Add</NavDropdown.Item>
                <NavDropdown.Item href="/update/:customerId">
                  Update
                </NavDropdown.Item>
                <NavDropdown.Item href="/fetchById">FetchById</NavDropdown.Item>
                <NavDropdown.Item href="/fetchAll">FetchAll</NavDropdown.Item>
              </NavDropdown>
             <NavDropdown style={{color:"black"}} title="Custome" id="basic-nav-dropdown">
          <NavDropdown.Item href="/add2">Add2</NavDropdown.Item>
          <NavDropdown.Item href="/update">Update</NavDropdown.Item>
          <NavDropdown.Item href="/fetch">fetchById2</NavDropdown.Item>
          <NavDropdown.Item href="/fetchAll2">FetchAll2</NavDropdown.Item>
          
        </NavDropdown>  
        {/* // <Link className="btn btn-outline-light" to="/login">
        //         LogIn
        //       </Link>   &nbsp; */}
              <Link className="btn btn-outline-light"  to="/out">
                SignOut
              </Link>
              
  
            {/* </Nav>)} */}
            {/* // ((loggedOut) &&(<Nav>
            //   <Link className="btn btn-outline-light" to="/" onClick={this.hide}>
            //   Home</Link>
         
             
            // <Link className="btn btn-outline-light" to="/log">Login</Link></Nav>))} */}
            </Nav>
          </div>
        </Nav>
        {/* <NavLink  className="btn btn-outline-light" to="/insert">LogIn</Navl> */}
      </div>
    );
  }
}
