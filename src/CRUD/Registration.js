import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Registartion.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function Registration(props) {
  let navigate = useNavigate();
  const [register, setRegister] = useState({
    userId: "",
    userName: "",
    eMail: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };
  const save = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:8080/save",
        register
        // employeename: employeename,
        //  email: email,
        //  password: password,
      );
      alert("User Registation Successfully");
      navigate("/fetchAll");
    } catch (err) {
      alert(err);
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8080/registration",
  //       register
  //     );
  //     // Handle success, maybe redirect the user.
  //     setRegister(response.data.registered);
  //     console.log(response.data);
  //     alert("Registration Successfull...");
  //     navigate("/fetchAll");
  //   } catch (error) {
  //     console.error("Registration error:", error);
  //   }
  // };cmd
  return (
    <div>
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

      <div className="conatainer ">
        <div className="row ">
          <div className="offset-md-5 bg-light border 
          rounder p-4 mt-3 shadow"  style={{ width: "400px", }}>
            <form onSubmit={save}>
              <h2  style={{
                  textAlign: "center",
                  fontFamily: "cursive",
                  fontSize: "40px",
                }} className="text-center m-1"> SignIn</h2>
              <hr></hr>

              <div className="mb-3 ">
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
                        className="form-control"
                        placeholder="Enter your userName"
                        name="userName"
                        value={register.userName}
                        onChange={handleChange}
                        required
                      />
                   </div>
                  </div>
                </div>
              
              {/* </div> */}
              {/* <div className="mb-3"> */}
              <div className="inputGroupContainer mb-3">
                  <label className="form-label" htmlFor="form2Example2">
                    Email
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa fa-user-circle-o"></i>
                    </span>
                    <input
                      type={"email"}
                      className="form-control"
                      placeholder="Enter your Email"
                      name="eMail"
                      value={register.eMail}
                      onChange={handleChange}
                      required
                    />
                 
                </div>
               
              </div>
            
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
                      className="form-control"
                      placeholder="Enter your password"
                      name="password"
                      value={register.password}
                      onChange={handleChange}
                      required
                    />
                 
                </div>
              
              </div>
              <div className="text-center"><p> 
              Already have an account?
              <Link to={'/logged'}> LogIn</Link>
              </p></div>
              <div style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  //to={"/homeNavbar2"}
                  className="btn btn-outline-primary "
                >
                  Register
                </button>
                <button
                  type="clear"
                  className="btn btn-outline-danger mx-2 text-center"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="/etc.clientlibs/bagic/components/content/product/common/buyonlineheader/clientlib.min.css"
        type="text/css"
      ></link>
    </div>
  );
}
