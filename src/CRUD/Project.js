import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Footer1 from '../A/Footer1'
import HomeHeader from '../Project/HomeHeader'
import { Route, Routes } from 'react-router-dom'

export default function Project() {
  return (

    <Container>
 {/* <Row><HomeHeader/></Row> */}
  <Row>
  <HomeHeader/>
  <Routes>
         <Route path='/homeHeader' Component={HomeHeader}/>
     {/*  <Route path="/log" element={<Log onLogin={setLoggedIn} />} />
    //         <Route path="/out" element={<LogOut onLogin={setLoggedOut} />} />
    //         <Route path="/" element={<LoginForm onLogin={setLoggedIn} />} />
    //         <Route path="navbar" Component={Navbar} />
    //         <Route path="homeHeader" Component={HomeHeader} />
    //         <Route path="/fetchById" Component={Id} />
    //         <Route path="/fetch" Component={FetchById} />
            // <Route path="/homeNavbar2" Component={HomeNavbar2} />
           
            // <Route path="/fetchById2" Component={FetchById2} />
            // <Route path="/add" Component={Add} />
          
            // <Route path="/customer"Component={Customer}/>
            // <Route path="/fetchAll" Component={FetchAll} />
            // <Route path="/fetchAll2" Component={FetchAll2} />
            // <Route path="/registration" Component={Registration} />
            // <Route path="/update/:customerId" Component={Update} />
            // <Route path="/update" Component={Update} />
        //     <Route path="/byName" Component={Find} />
        //     <Route path="/findByName" Component={FindByName} />
        //     <Route path="/login" Component={Login} />
        //     <Route exact path="/" Component={Home} />*/}
            
            </Routes>
       
  </Row>
     <Row><Footer1/></Row>  
  </Container>
  )}
