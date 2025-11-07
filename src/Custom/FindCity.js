import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class FindCity extends Component {
  
  render() {
    
    return (
        <div>
            <Container>
        <div className="row">
          <div className="col-md-6 offset-md-3 bg-warning border rounder p-4 mt-2 shadow">
            <h2 style={{ textAlign: "center", color: "tomato" }}>FindCity</h2>
            <div class="input-group" style={{width:"60%"}}>
              <input
                type="text"
                placeholder="Search City"
                className="form-control"
              ></input>
              <span className="input-group-text">
                <i class="fa fa-search"></i>
              </span>
            </div>
            {/* <div className="container"> */}
            <table className="table table-hover table-bordered shadow mt-4 ">
            <thead className="table-info">
              <tr>
                <th>#</th>
                <th scope="col">CustomerId</th>
                <th scope="col">CustomerName</th>
                <th scope="col">CustomerAge</th>
                <th scope="col">E-Mail</th>
                <th scope="col">phone</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Salary</th>
                <th scope="col">CreaditLimit</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              {/* {customers.map((customer, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{customer.customerId}</td>
                  <td>{customer.customerName}</td>
                  <td>{customer.customerAge}</td>
                  <td>{customer.eMail}</td>
                  <td>{customer.phoneNumber}</td>
                  <td>{customer.state}</td>
                  <td>{customer.city}</td>
                  <td>{customer.address}</td>
                  <td>{customer.salary}</td>
                  <td>{customer.creaditLimit}</td>
                  <td>{customer.gender}</td>
                </tr>
              ))} */}
            </tbody>
          </table>
            </div>
          </div>
        {/* </div> */}
        </Container>
      </div>
    );
  }
}
