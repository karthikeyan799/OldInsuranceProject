import React, { Component } from "react";
import "./Log.css";
import { Link } from "react-router-dom";
export default class LogOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernames: "",
      passwords: "",
      error: "",
      loggedOut:false,
      display:false,
      usernameError:"",
      passwordError:""
    //   loggedIn:false
     
    };
  }
hide=()=>{
    if(this.state.display==true){
      this.setState({"display":false})
    }else{
      this.setState({"display":true})
    };
  }
  onChangeName = (e) => {
    this.setState({
      usernames: e.target.value,
      usernameError: "",
    });
  };
  onChangePassword = (e) => {
    this.setState({
      passwords: e.target.value,
      passwordError: "",
    });
  };
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: "", // Clear any previous error message
    });
  };
  handleSubmit =  (e) => {
    e.preventDefault();

    const { usernames, passwords } = this.state;
    if (usernames === "karthi" && passwords === "a") {
      // Successful login, no need to handle errors here
      this.setState({loggedOut:true});
      this.props.onLogin(true);
    //   alert('logout succesfull')
    // this.hide();
      console.log('logout succesfull')
      alert('logout succesfull')
     
      // this.props.onLogin();
    } else {
      if(!this.state.usernames){
        this.setState({usernameError:"enter name"});
      }
      if(!this.state.passwords){
        this.setState({passwordError:"Enter a password"})
      }
      alert("LogOut is failed")
      // this.setstate({
      //   error:'Invalid unm or psw'
      // })
      // error:'Invalid username or password';
    }
    // try {
    //   const response = await fetch("/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ username, password }),
    //   });

    //   if (response.status === 200) {
    //     // Successful login, perform your action (e.g., redirect)
    //     console.log("Login successful");
    //   } else {
    //     // Failed login, display an error message
    //     const data = await response.json();
    //     this.setState({
    //       error: data.message || "Login failed",
    //     });
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };
  render() {
    return (
      <div className="container">
        <div className="row">
        <div className=" offset-md-8 bg-light border rounder p-4 mt-5 shadow"style={{width:"400px"}}>
          {" "}
          <form>
            {/* <div className="col-md-6 offset-md-3 bg-warning border rounder p-4 mt-4 shadow"></div> */}
            {/* <!-- Email input --> */}
            <div className="">
              <h2
                style={{
                  textAlign: "center",
                  fontFamily: "cursive",
                  fontSize: "60px",
                }}
              >
                SignOut
              </h2>
              <hr />
            {/* </div> */}
            {this.state.loggedOut ? (
          <p>You are logged in!</p>
        ) : (
            <div className="mb-3" style={{}}>
              <div className="inputGroupContainer mb-3">
                <label className="form-label" for="form2Example1">
                  Email address
                </label>
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="fa fa-user-circle-o"></i>
                  </span>
                  <input
                    type="text"
                    id="form2Example1"
                    placeholder="UserName"
                    name="username"
                    value={this.state.usernames}
                    onChange={this.onChangeName}
                    className="form-control"
                  />
                </div> {!this.state.usernames && (
                          <span className="text-danger">{this.state.usernameError}</span>
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
                    value={this.state.passwords}
                    onChange={this.onChangePassword}
                    className="form-control"
                  />
                </div> {!this.state.passwords && (
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
              <hr />
              {/* <!-- Submit button --> */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  fontFamily: "cursive",
                  fontSize: "20px",
                }}
                className="btn btn-primary btn-block mb-4"
              // onClick={this.handleSubmit}
              to="/"
              >
                SignUp 
              </button>

              {/* <!-- Register buttons --> */}
              {/* <div class="text-center">
                <p>
                  Not a member? <Link to="/registration">Register</Link>
                </p> */}
                {/* <p>or sign up with:</p>
              <button type="button" class="btn btn-secondary btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
              </button>

              <button type="button" class="btn btn-secondary btn-floating mx-1">
                <i class="fab fa-google"></i>
              </button>

              <button type="button" class="btn btn-secondary btn-floating mx-1">
                <i class="fab fa-twitter"></i>
              </button>

              <button type="button" class="btn btn-secondary btn-floating mx-1">
                <i class="fab fa-github"></i>
              </button>*/}
              {/* </div> */}
            </div>
        )}
            </div>
          </form></div>
          {this.state.error && <p>{this.state.error}</p>}
        </div>
      </div>
    );
  }
}
