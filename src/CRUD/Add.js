import React, { Component } from 'react'
// import { Router, Routes } from 'react-router-dom'
import Header from './Header';
import {Route,BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './Home';
import { Col, Row } from 'react-bootstrap';
export default class Add extends Component {
  render() {
    return (
      <div>
        {/* <Router>
          <Header/>
          <Routes>
            <Route exact path="/" Component={Home}/>
          </Routes>
        </Router> */}
         <form class="well form-horizontal" id="contact_form" name="myForm" onsubmit="return validateForm()">

        <h3 style={{color:"red"}}>Add Customer</h3>
      <Row>
        <Col sm={4} md={4}style={{textAlign:"right"}}>CustomerId :</Col>
        <Col sm={7} md={6} className="inputGroupContainer">
          <div className="input-group">
            <span className="input-group-text"><i className="fa fa-user-circle-o"></i></span>
            <input id="id" name="id" placeholder='Customer Id' className='form-control' type='number'></input>
          </div>
        </Col>
      </Row>
        {/* <div class="row mt-3"> */}
  <Row style={{marginTop:"10px"}}> 
    <Col sm={4} md={4} style={{textAlign:"right"}} >Customer Name:</Col>
    <Col sm={7} md={6} class="inputGroupContainer">
      <div class="input-group">
        <span class="input-group-text"><i class="fa fa-user"></i></span>
        <input id="name" name="name" placeholder="Customer Name" class="form-control" type="text"></input>
        </div>
      <span id="sname"></span>
    </Col>
    </Row>
  {/* </div> */}
         {/* <div class="row mt-3"> */}
         <Row style={{marginTop:"15px"}}> 
    <Col sm={4} md={4} style={{textAlign:"right"}} >Customer Age:</Col>
    <Col sm={7} md={6} class="inputGroupContainer">
      <div class="input-group">
        <span class="input-group-text"><i class="fa fa-child"></i></span>
        <input id="age" name="age" placeholder="Customer Age" class="form-control" type="number"></input>
        </div>
      <span id="sage"></span>
    </Col>
    </Row>
    
    <Row style={{marginTop:"15px"}}> 
    <Col sm={4} md={4} style={{textAlign:"right"}} >E-Mail:</Col>
    <Col sm={7} md={6} class="inputGroupContainer">
      <div class="input-group">
        <span class="input-group-text"><i class="fa fa-envelope"></i></span>
        <input id="email" name="email" placeholder="E-Mail Address" class="form-control" type="text"></input>
        </div>
      <span id="spnEmail"></span>
    </Col>
    </Row>
    <Row style={{marginTop:"15px"}}> 
    <Col sm={4} md={4}style={{textAlign:"right"}}>Phone :</Col>
    <Col sm={7} md={6} class=" inputGroupContainer">
      <div class="input-group">
        <span class="input-group-text"><i class="fa fa-phone"></i></span>
        <input id="phone" name="phone" placeholder="(845)555-1212" class="form-control" type="number"></input>
        </div>
      <span id="sphone"></span>
    </Col>
    </Row>
    <Row style={{marginTop:"15px"}}> 
    <div>
    <Col sm={4} md={4} style={{textAlign:"right"}}>City:</Col>
    <Col sm={7} md={6}  class="inputGroupContainer">
      <div class="input-group">
        <span class="input-group-text"><i class="fa fa-home"></i></span>
        <input id="address" name="address" placeholder="Address" class="form-control" type="text"></input>
       {/* <input><option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option></input>  */}
        </div>
      <span id="saddress"></span>
    </Col>
    {/* </Row> */}
    {/* <Row style={{marginTop:"15px"}}>  */}
    <Col sm={4} md={4} style={{textAlign:"right"}}>State:</Col>
    <Col sm={7} md={6}  class="inputGroupContainer">
      <div class="input-group">
        <span class="input-group-text"><i class="fa fa-home"></i></span>
        <input id="address" name="address" placeholder="Address" class="form-control" type="text"></input>
        </div>
      <span id="saddress"></span>
    </Col>
    </div>
    </Row>
    <Row style={{marginTop:"15px"}}> 
    <Col sm={4} md={4} style={{textAlign:"right"}} >Salary:</Col>
    <Col sm={7} md={6} class="inputGroup">
      <div class="input-group">
        <span class="input-group-text"><i class="fa fa-inr"></i></span>
        <input id="salary" name="salary" placeholder="salary" class="form-control" type="text"></input>
        </div><span id="sal"></span>
    </Col>
    </Row>
    <Row style={{marginTop:"15px"}}> 
    <Col sm={4} md={4} style={{textAlign:"right"}}>Credit Limit:</Col>
    <Col sm={7} md={6} class="inputGroupContainer">
      <div class="input-group">
        <span class="input-group-text"><i class="fa fa-credit-card"></i></span>
        <input id="credit" name="credit" placeholder="Credit Limit" class="form-control" type="text"></input>
        </div><span id="scredit"></span>
    </Col>
    </Row>
    <Row style={{marginTop:"15px"}}> 
    <Col sm={4} md={4} style={{textAlign:"right"}} class="gender control-label">Gender:</Col>
    <Col sm={7} md={6} class="rad">
      <div class="radio">
        <label>
          <input class="male" type="radio" id="male" name="gender" value="male" /> Male
        </label>
      </div>
      <div class="radio">
        <label>
          <input class="female" type="radio" id="female" name="gender" value="female" /> Female
        </label>
      </div>
    </Col>
    </Row>
    <Row>
    <Col sm={4} md={4} class="control-label"></Col>
    <Col sm={7} md={6} >
      <button type="submit" class="btn btn-success button">Add <span class="fa fa-send"></span></button>
    </Col>
    </Row>
      </form>
      </div> 
    )
  }
}
