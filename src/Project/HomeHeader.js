import React, { useState } from "react";
import "./HomeHeader.css";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "../CRUD/Home";
import Update from "../CRUD/Update";
import HomeNavbar2 from "./HomeNavbar2";
import FetchById from "../CRUD/FetchById";
import Add from "../CRUD/Add";
import FetchAll2 from "../CRUD/FetchAll2";
import FetchAll from "../CRUD/FetchAll";
import Add2 from "../CRUD/Add2";
import FetchById2 from "../CRUD/FetchById2";
import FindByName from "../Custom/FindByName";
import Login from "../CRUD/Login";
import Registration from "../CRUD/Registration";
import Footer from "../A/Footer1";
import { Container, Nav, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Id from "../CRUD/Id";
import Log from "../CRUD/Log";
// import LogOut from "../CRUD/LogOut";
import Find from "../Custom/Find";
import Customer from "../CRUD/Customer";
import Ho from "../A/Ho";
import Profile from "../CRUD/Profile";
import Dashboard2 from "../CRUD/Dashboard2";
import Update3 from "../Custom/Update3";
import AddPolicy from "../Policy/AddPolicy";

export default function HomeHeader(props) {
  const [loggedIn, setLoggedIn] = useState(false);//false
  // const [loggedOut, setLoggedOut] = useState(false);cmd
  const [display, setDisplay] = useState(true);
  // const navigate = useNavigate();
  // const [redirect,setRedirect]=useState(false);
  // const demo = true;cmd
  // const hide = () => {
  //   if (display === true) {
  //     setDisplay({ display: false });
  //   } else {
  //     setDisplay({ display: true });
  //   }
  // };cmd
  // const [user, setUser] = useState(null);cmd
  // const handleSubmit = (fetch) => {
  //   setUser(fetch);
  // };cmd
  const out = () => {
    // alert("Are You LogOut !");
    alert("LogOut is Successfully...");
    // navigate("/logged",{replace: true});
    // setLoggedIn(false) ;
  };
  const [showConfirmation, setConfirmation] = useState(false);

  const showAlert = () => {
    alert('you clicked "yes');
    setConfirmation(false);
  };
  const handleYesClick = () => {
    showAlert();
  };
  const handleNoClick = () => {
    alert('you clicked "no');
    setConfirmation(false);
  };
  const renderConfirmationDialog = () => {
    if (showConfirmation) {
      return (
        <div>
          <p>Are you sure you want to continue?</p>
          <button onClick={handleYesClick}>Yes</button>
          <button onClick={handleNoClick}>No</button>
        </div>
      );
    }
    return null;
  };
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row style={{ backgroundColor: "blueviolet", height: "96vh" }}>
        {/* <HomeNavbar2 loggedIn={loggedIn}/> */}

        <Router><div style={{ height: "7vh" }}>
            <Nav
              className="navbar navbar-expand-lg navbar-light bgsuccess"
              style={{ width: "100%" }}
            >
              <div className="container-fluid head">
                <div className="navbar-header">
                  <div className="logo"></div>
                  <h2
                    className="navbar-brand"
                    style={{
                      color: "black",
                      marginLeft: "60px",
                      marginTop: "-40px",
                    }}
                  >
                    Insurance Management System
                  </h2>
                </div>   
                <Nav
                  className="justify-content-end">
                  {!loggedIn ? (
                    <Nav className="navbar-supported-content ml-auto text-right">
                      {/* <Nav> */}
                      <Link className="nav-item btn btn-outline-light" to="/">
                        Home
                      </Link>
                      &nbsp;
                      <Link
                        className="nav-item btn btn-outline-light"
                        to="/logged"
                        style={{ marginLeft: "6px" }}
                      >
                        Login
                      </Link>
                    </Nav>
                  ) : (
                    loggedIn && (
                      <Nav style={{ justifyContent: "end" }}>
                        <Link
                          className="btn btn-outline-light"
                          to={"/"}
                          onClick={out}
                          // onClick={()=>setConfirmation(true)}
                          reloadDocument={"/home2"}
                        >
                          LogOut
                        </Link>
                        {/* {renderConfirmationDialog()} */}
                      </Nav>
                    )
                  )}
                </Nav>
              </div>
            </Nav>
          </div>

          <div
            className="img col responsive"
            style={{ height: "93vh", backgroundAttachment: "scroll" }}
          >
            <div className="side " style={{ height: "89vh", color: "black" }}>
              {loggedIn && (
                <ul>
                  <li>
                    <Link className="link btn btn-outline-light" to="/add2">
                      Add Customer
                    </Link>
                  </li>

                  <li>
                    {" "}
                    <Link className="link btn btn-outline-light" to="/update">
                      Update Customer
                    </Link>
                  </li>
                  <li>
                    <Link className="link btn btn-outline-light" to="/fetch">
                      Fetch By Customer Id
                    </Link>
                  </li>
                  <li>
                    <Link className="link btn btn-outline-light" to="/fetchAll">
                      Find All Customer
                    </Link>
                  </li>
                  {/* <li>
                    <Link to={"/update"} className="link btn btn-outline-light">update</Link>
                  </li> */}
                  <li>
                    <Link
                      className="link btn btn-outline-light"
                      to="/findByName"
                    >
                      Find By Customer Name
                    </Link>
                  </li>
                  {/* <Link className="link btn btn-outline-light" to={"/byName"}>
                    find
                  </Link> */}
                </ul>
              )}
            </div>
            <div
              style={{
                height: "91vh",
                overflow: "auto",
                // , width: "217vh"
              }}
            >
              <Routes>
                {/* {renderNavbar()} */}

                {/* <Route exact path="/" Component={Home} /> */}
                <Route
                  exact
                  path="/log"
                  element={<Log onLogin={setLoggedIn} />}
                />
                {/* <Route path="/logged" element={<LogOut onLogin={setLoggedOut}/>} ></Route> */}
                <Route
                  exact
                  path="/home2"
                  element={<Home onLogin={!setLoggedIn} />}
                />
                <Route
                  exact
                  path="/logged"
                  element={<Ho onLogin={setLoggedIn} />}
                />

                {/* <Route exact path="/"> {user ? <Redirect to='/profile' />:<Ho onLogin={handleSubmit}/>}/</Route> */}

                {/* <Route path="*" Component={<Navigate to="/" replace/>}/> */}
                {/* <Route render={()=><Navigate to="/log"></Navigate>}/> */}
                {/* <Route
                  path="/"render={()=><LogOut />}
                  // element={<LogOut onLogin={!setLoggedIn} />}
                /> */}
                {/* <Route path="/" element={<LoginForm onLogin={setLoggedIn} />} /> */}
                <Route path="/navbar" Component={Navbar} />
                <Route path="/homeHeader" Component={HomeHeader} />
                <Route path="/fetchById" Component={Id} />
                <Route path="/fetch" Component={FetchById} />
                <Route path="/homeNavbar2" Component={HomeNavbar2} />
                {/* <Route path="/fetchById" Component={FetchById} /> */}
                <Route path="/fetchById2" Component={FetchById2} />
                <Route path="/add" Component={Add} />
                <Route path="/add2" Component={Add2} />
                <Route path="/customer" Component={Customer} />
                <Route path="/fetchAll" Component={FetchAll} />
                <Route path="/fetchAll2" Component={FetchAll2} />
                <Route path="/registration" Component={Registration} />
                <Route path="/update/:customerId" Component={Update3} />
                <Route path="/update" Component={Update} />
                <Route path="/up/:customerId" Component={Update} />
                <Route path="/byName" Component={Find} />
                <Route path="/findByName" Component={FindByName} />
                <Route path="/login" Component={Login} />
                <Route path="/policy" Component={AddPolicy} />
                <Route path="/home/:eMail/:password" Component={Home} />
                <Route path="/dashboard/:userName" Component={Dashboard2} />
                <Route exact path="/" Component={Home} />
                <Route path="/profile/:userName" Component={Profile} />

                {/* <Route path="/log" Component={Log} /> */}
              </Routes>
            </div>
          </div>
        </Router>
      </Row>
      <Row
        style={{
          height: "4vh",
          marginLeft: "-25px",
          marginRight: "-12px",
        }}
      >
        <Footer />
        {/* © 2020 Copyright:Insurance Policy */}
      </Row>
    </Container>
  );
}
