import React, { Component } from "react";
import "./Log.css";
import { Link,
  //  Navigate, useNavigate, withRoutercmd
   } from "react-router-dom";
import axios from "axios";
// import HomeHeader from "../Project/HomeHeader";cmd
// import Home from "./Home";cmd
// import Profile from "./Profile";cmd
// import { Email } from "@mui/icons-material";cmd
export default class Log extends Component {
constructor(props){
  super(props);
  this.state = {
     eMail: "",
     userName:"",
     password: "",
     error:"",
     loggedIn: false,
     display:true,
     out:true, 
      emailError: "",
      userNameError:"",
      passwordError: "",
      onError:"",
      history:""  
    }

  }
  

    onChangeName = (e) => {
    this.setState({
      eMail: e.target.value,
      emailError: "",
    });
  };
   onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
      passwordError: "",
    });
  };
    handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: "", // Clear any previous error message
    });
  };
  // const history=createH
   login= async(e)=>{
      e.preventDefault();
        // const {eMail,password}=useState;
      const { eMail, password } = this.state;
    //  let navigate = useNavigate();
      try{
          await axios.post("http://localhost:8080/loginUser",{eMail,password
      }).then((res) =>
        {
         console.log(res.data.message);
        //  const user=res.data.message==="Email not exits";cmd
        //  const pass=res.data.message === "Login Success";cmd
         if (res.data.message === "Email not exits")
         {

          // alert("Invalid login");
           this.setState({eMailError:"Enter name"});
           this.setState({passwordError:"Enter a password"})
          //  if(this.state.password.length>6){
          //   this.setState({passwordError:"Password must be 6 letters"})
          // }
         }
         else if(res.data.message === "Login Success")
         {
          this.setState({ loggedIn: true });
          this.props.onLogin(true);
          // this.props.
          alert("login succesfull");
          console.log("login succesfull");
          this.props.history.push('/home');

         }

          else
         {
            if(!this.state.eMail){
          this.setState({usernameError:"enter name"});
         }
         if(!this.state.password){
          this.setState({passwordError:"Enter a password"})
         }

            if(!this.state.error){
              // this.setState({error:""})

            this.setState({onError:"Incorrect Email and Password not match"});
            // alert("Please, Regiter new Account");
            }
          }
          // alert("Incorrect Email and Password not match");
          // alert("Please, Regiter new Account");
          // navigate("/registration");
          this.props.history.push('/home');
        })

    }catch (err) {
      if(!this.state.eMail){
        this.setState({eMailError:"Enter Email"});
      }
      // else if(this.state.email.length<6){
      //   this.setState({eMailError:"password must 6 letters"})
      // }
      if(!this.state.password){
        this.setState({passwordError:"Enter a password"})
      }else if(this.state.password.length>6){
        this.setState({passwordError:"Password must be 6 letters"})
      }
      if(!this.state.error){
        this.setState({error:""})
      }
      // alert(err);
      console.log(err)
      // alert("Login is Failure")
    }

   }
  //  handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const { username, password } = this.state;
  //   if (username === "karthi" && password === "") {
  //     // Successful login, no need to handle errors here
  //     this.setState({ loggedIn: true });
  //     this.props.onLogin(true);
  //     alert("login succesfull");
  //     console.log("login succesfull");
  //     // this.props.onLogin();
  //   }else{
  //     if(!this.state.username){
  //       this.setState({usernameError:"Enter user name"});
  //     }
  //     if(!this.state.password){
  //       this.setState({passwordError:"Enter a password"})
  //     }
  //   }
  // };
  render() {
    // const { error } = this.state;

    return (
      <div className="container">
        <div className="row">
          {/* <div
            className=" offset-md-8 bg-light border rounder p-4 mt-5 shadow"
            style={{ width: "400px" }}
          > */}
            {" "}
            {/* <form onSubmit={this.login}> */}
              {/* <div className="col-md-6 offset-md-3 bg-warning border rounder p-4 mt-4 shadow"></div> */}
              {/* <!-- Email input --> */}
              {/* <div className=""> */}
                {/* <h2
                  style={{
                    textAlign: "center",
                    fontFamily: "cursive",
                    fontSize: "60px",
                  }}
                >
                  LogIn
                </h2> */}
                {/* <hr /> */}
                {/* </div> */}
                {/* <Profile id={1} name="karthi" email={this.state.eMail} password={this.state.password}/> */}
                {!this.state.loggedIn &&
                  // <p>Welcome... {this.state.userName}</p>
                (
                  <div
                  className=" offset-md-8 bg-light border rounder p-4 mt-5 shadow"
                  style={{ width: "400px" }}
                >
                  <form  onSubmit={this.login}>
                  <div className="">
                  <h2
                  style={{
                    textAlign: "center",
                    fontFamily: "cursive",
                    fontSize: "60px",
                  }}
                >
                  LogIn
                </h2>
                  <div className="mb-3" style={{}}>
                    <div className="inputGroupContainer mb-3">
                      <label className="form-label" for="form2Example1">
                        Email 
                      </label>
                      <div class="input-group">
                        <span class="input-group-text">
                          <i class="fa fa-user-circle-o"></i>
                        </span>
                        <input
                          type="text"
                          id="password"
                          placeholder="UserName"
                          name="username"
                          value={this.state.eMail}
                          // onChange={this.handleInputChange}
                        onChange={this.onChangeName}
                          className="form-control"
                        />
                      </div>
                      {!this.state.eMail && (
                          <span className="text-danger">{this.state.eMailError}</span>
                        )}
                    </div>
                    {/* <!-- Password input --> */}
                    <div className="inputGroupContainer mb-3">
                      <label className="form-label" for="form2Example2">
                        Password
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fa fa-user-circle-o"></i>
                        </span>
                        <input
                          type={"password"}
                          id="form2Example2"
                          name="password"
                          placeholder="Password"
                          value={this.state.password}
                          // onChange={this.handleInputChange}
                          onChange={this.onChangePassword}
                          className="form-control"
                        />{" "}
                        {/* {error.password && (
                          <span className="error">{error.password}</span>
                        )} */}
                        {/* <p className="text-danger">
                          {!this.state.password? this.state.passwordError:""}
                        </p> */}
                      </div>
                      {!this.state.password && (
                          <span className="text-danger">{this.state.passwordError}</span>
                        )}
                    </div>

                    {/* <!-- 2 column grid layout for inline styling --> */}
                    <div className="row mb-4">
                      <div className="col d-flex justify-content-center">
                        {/* <!-- Checkbox --> */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="form2Example34"
                            checked
                          />
                          <label class="form-check-label" for="form2Example34">
                            {" "}
                            Remember me{" "}
                          </label>
                        </div>
                      </div>

                      <div class="col">
                        {/* <!-- Simple link --> */}
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>
                    {!this.state.error && (
                          <span className="text-danger">{this.state.onError}</span>
                        )}
                    {/* <hr /> */}
                    {/* <!-- Submit button --> */}

                    <button
                      type="submit"
                      style={{
                        width: "100%",
                        fontFamily: "cursive",
                        fontSize: "20px",
                      }}
                      className="btn btn-primary btn-block mb-4"
                    // onClick={this.navigateToAnotherPage}
                    >
                      Log in
                    </button>

                    {/* <!-- Register buttons --> */}
                    <div class="text-center">
                      <p>
                        Not a member? <Link to="/registration">Register</Link>
                      </p>
                    </div>
                  </div>
                  </div>
                  </form>
                  </div>
                )}
              {/* </div> */}
            {/* </form> */}
          {/* </div> */}
          {/* {this.state.error && <p>{this.state.error}</p>} */}
        </div>
      </div>
    );
            }
  // render
}