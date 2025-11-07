import React, { Component, useState } from "react";
import { Link, 
  // Route, Router, Routes, unstable_HistoryRouter, useNavigate //cmd
 } from "react-router-dom";
// import Navbar from "../Project/Navbar";cmd
// import Home from "./Home";cmd
// import Registration from "./Registration";cmd
import axios from "axios";

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      display:true,
      userName:"",
      password:"",
    };
  }
  show=()=>{
      if(this.state.display===true){
        this.setState({"display":true})
      }else{
        this.setState({"display":false})
      };
    }
  // hide=()=>{
  //   if(this.state.display==true){
  //     this.setState({"display":false})
  //   }else{
  //     this.setState({"display":true})
  //   };
  // }
  
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [inputValue,setInputValue]=useState('');
  // const [inputError,setInputError]=useState(null);
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
   handleLogin = async () => {
    // const { userName, password } = this.state;cmd
    try {
      const response = await axios.post("http://localhost:8080/save", 
       // { userName, password }
      // this.state.display==true
      );
      console.log("Login successful:", response.data);
      //this.props.history.push("/"); // Redirect to dashboard
    } catch (error) {
      console.error("Login error:")
    }
  };
  // const params=props.match.params;
  
  //  navigate =()=> useNavigate();

    click=()=>{
    // navigate("/homeHeader");
   this.show();
   //this.props.unstable_HistoryRouter('/');
    //this.navigate("/home")
    
  }
    handleInputChange(event) {
    const value = event.target.value;
  //  setUserName(e.target.value)}
    // setInputValue(value);

    if (value.length < 5) {
      // setInputError('Input must be at least 5 characters');
    } else {
      // setInputError(null);
    }
  }
  render(){
  return (
    <div>
      {/* <Router>
       <Navbar/>
        <Routes>
          <Route  path="/home" Component={Home}/>
          <Route  path="/login" Component={Login}/>
          <Route path="/registration" Component={Registration}/>
         
        </Routes>
         
      </Router> */}
      <link
        rel="stylesheet"
        href="/etc.clientlibs/bagic/components/content/motor-insurance/buy-online/semcar/clientlib.min.css"
        type="text/css"
      ></link>

      <link
        rel="stylesheet"
        href="/etc.clientlibs/bagic/clientlib/common-clientlibs-static.min.css"
        type="text/css"
      ></link>
 <form onSubmit={this.handleSubmit}>
      <div className="conatainer ">
   
        <div className="row ">
          
          <div className="col-md-6 offset-md-3 bg-warning border rounder p-4 mt-2 shadow">
            <h1 className="text-center m-4"> LogIN</h1>
            {/* <form onSubmit={this.handleSubmit}> */}
            <hr></hr>
            <div className="mb-3">
              <label htmlFor="Name" className="form-table">
                User Name
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your userId"
                  name="userName"
                  value={this.state.userName}
                   //value={this.setState.userName}
                   onChange={this.handleChange}
                //onChange={handleInputChange}
                   required
                />
              </label>
              {/* {inputError && <div style={{ color: 'red' }}>{inputError}</div>} */}
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-table">
                Password
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  value={this.state.password}//
                  maxLength={10}
                 // minLength={6}
                  onChange={this.handleChange}
                  required

                  // onChange={(e) => setPassword(e.target.value)}//
                  
                />
                <Link to="/registration">New Account</Link>
                <Link className="btn btn-outline-light" to="/registration">
                  Regis
                </Link>
                &nbsp;
              </label>
            </div>
            <div style={{ textAlign: "center" }}>
              {/* <button  onClick={this.handleSubmit}
             className="btn btn-outline-primary ">Login
                </button> */}
              <button type="submit"  className="btn btn-outline-primary"  >Login</button>
              {/* <Link to="/">login</Link> */}
              <button
                type="clear"
                className="btn btn-outline-danger mx-2 text-center"
              >
                Cancel
              </button>
            </div>
           {/* // <form/> */}
          </div>
        </div>
      </div>
      </form>
      <link
        rel="stylesheet"
        href="/etc.clientlibs/bagic/components/content/product/common/buyonlineheader/clientlib.min.css"
        type="text/css"
      ></link>
    </div>
  );
}
}
