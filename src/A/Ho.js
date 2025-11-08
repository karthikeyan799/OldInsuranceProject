import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { API_BASE_LINK } from "../API";
export default function Ho(props) {
  const [fetch, setfetch] = useState({
    userName: "",
    eMail:'',
    password: "",
    error: "",
    eMailError:'',
    passwordError:'',
    loggedIn:false
  });
  let navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setfetch({ ...fetch, [name]: value });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // alert('alert')
  //   if (fetch.userName === "karthi" && fetch.password === "") {
  //     alert("Loged in successfull");
  //     navigate("/home");
  //   }
  // };cmd
  // const [error,setErrors]=useState({});cmd
// function validateForm(){
//   let errors={};
//   if(fetch.userName===''){
//     errors.userName='Name is Required';
//   }
//     else if (
//     !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/i.test(
//       fetch.userName
//     )
//   ) {
//     errors.userName = "Invalid email address";
//   }
// }cmd
  const login = async (e) => {
    e.preventDefault();
    // const validationErrors = validateForm(fetch);
    // if (Object.keys(validationErrors).length===0) {
    //   // Form is valid, submit it
    //   // You can perform an API call or further actions here
    // //  alert("FetchId id sucess")
    
    //   console.log("Form data is valid:", fetch);
    // } else {
    //   // Form is not valid, display errors
    //   // alert("FetchId is error")
    //   setErrors(validationErrors);
    // }
    const { userName, password } = fetch;
    try {
      await axios
        // .post("http://localhost:8080/loginUser", { userName, password })
        // .post("https://springprojectinsurance-production-87a1.up.railway.app/loginUser", { userName, password })
        .post(`${API_BASE_LINK}loginUser`, { userName, password })
        .then((res) => {
          console.log(res.data.message);
          // const user = res.data.message === "Email not exits";cmd
          // const pass = res.data.message === "Login Success";cmd
         if (res.data.message === "Email not exits") {
            setfetch({ eMailError: "Invalid UserName",
            passwordError:"Invalid Password "});
            console.log('try blocklog')
          }else if(res.data.message==="password Not Match"){
            setfetch({
               eMailError: " ",
            passwordError:"Invalid Password "});
          } 
          
          else if (res.data.message === "Login Success") {
            
            setfetch({ loggedIn: true });
            props.onLogin(true);
            alert("login succesfull");
            console.log("login succesfull");
            props.onLogin(fetch);
            navigate('/dashboard/'+userName);
            
            // this.props.history.push('/home');
          } 
          // else if(res.data.message===''){
          //   setfetch({ eMailError: "Enter name empty",
          //   passwordError:"Enter alik Password empty" });
          //  console.log('empty');
          // }
          else {
            // if (!eMail) {
            //   setfetch({ usernameError: "enter name" });
            // }
            // if (!this.state.password) {
            //   setfetch({ passwordError: "Enter a password" });
            // }
            // if(fetch.password===''){
            //   setfetch({passwordError:"Password Is Empty"});
            // }

            if (fetch.error) {
              // this.setState({error:""})
              console.log('error tage')
              // setfetch({ onError: "Incorrect Email and Password not match" });
              setfetch({ error: "Incorrect Email and Password not match" });
             
              alert("Please, Regiter new Account");
            }
            
    // if (fetch.eMail==='') {
    //   setfetch({eMailError: "Email is required"});
    //   // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(customers.email)) {
    //   // ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$
    // } else 
    // if (fetch.userName===null)
    //  {
    //   setfetch({eMailError: "Invalid email address"})
    // }
          }
          // alert("Incorrect Email and Password not match");
          // alert("Please, Regiter new Account");
          // navigate("/registration");
        });
    } catch (err) {
      if (!fetch.eMail) {
        setfetch({ eMailError: "Enter Email" });
      // }else if (fetch.userName===null)
      // {
      //  setfetch({eMailError: "Invalid email address"})
     }
      
      // if (!err) {
      //   setfetch({ passwordError: "Enter a password",eMailError: "Enter a email"  });
      // }
       if (!fetch.password) {
        setfetch({ passwordError: "Enter a password",eMailError: "Enter a email"  });
        // setfetch({ passwordError: "Enter a email" });
      }

      //  else if (this.state.password.length > 6) {
      // setfetch({ passwordError: "Password must be 6 letters" });
      // }
      if (!fetch.error) {
        setfetch({ error: "Incorrect Email and Password not match" });
        // setfetch({ onError: "Incorrect Email and Password not match" });
              
      }
      
      // alert(err);
      console.log(err);
      // alert("Login is Failure")
    }
  };
  return (
    <div className="container-fluid ">
      <div className="">
      {!fetch.loggedIn &&(
        // <div
        //   className="offset-md-7 bg-light
        //    border rounder p-4 mt-5 shadow"

        //   style={{ width: "350px", }}
        // >
          <div className="row">
            <div className="col md-6 imgg "style={{borderLeft:""}}>
           
            </div>
            <div className="col md-6">
            <div
          className="offset-md-1 bg-light
           border rounder p-4 mt- shadow"

          style={{alignItems:"center", width: "550px",marginLeft:'-13px',
        }}
        >
          <form
          onSubmit={login}
          >
            <div className="logg">
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
                  <label className="form-label" htmlFor="form2Example1">
                    UserName 
                  </label>
                  <div class="input-group">
                    <span class="input-group-text">
                      <i class="fa fa-user-circle-o"></i>
                    </span>
                    <input
                      type={"text"}
                      id="form2Example1"
                      placeholder="UserName"
                      name="userName"
                      value={fetch.userName}
                      // onChange={this.handleInputChange}
                      onChange={handleChange}
                      // onChange={(e)=>setLog(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  {!fetch.eMail && (
                          <span className="text-danger">{fetch.eMailError}</span>
                        )}
                </div>
                {/* <!-- Password input --> */}
                <div className="inputGroupContainer mb-3">
                  <label className="form-label" htmlFor="form2Example2">
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
                      value={fetch.password}
                      // onChange={(e)=>...log(e.target.value)}
                      onChange={handleChange}
                      // onChange={(e)=>setPassword(e.target.value)}
                      // onChange={(e)=>setLog(e.target.value)}
                      className="form-control"
                    />{" "}
                    {/* {error.password && (
                        <span className="error">{error.password}</span>
                      )} */}
                    {/* <p className="text-danger">
                        {!this.state.password? this.state.passwordError:""}
                      </p> */}
                  </div>
                  {!fetch.password && (
                          <span className="text-danger">{fetch.passwordError}</span>
                        )}
                  {/* {!errors.password && (
                        <span className="text-danger">{errors.passwordError}</span>
                      )} */}
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
                {/* {!log.error && (
                        <span className="text-danger">{log.onError}</span>
                      )} */}
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
                    Create a new Account? <Link to="/registration">SignIn</Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
          </div>
          </div>
          </div>)}

      </div>
    </div>
  );
}
