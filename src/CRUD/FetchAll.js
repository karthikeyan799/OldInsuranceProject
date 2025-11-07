import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
// import data from './data/mock-data.'
import FetchById from "./FetchById";
import { Pagination } from "react-bootstrap";

export default function FetchAll() {
  const [customers, setCustomers] = useState([]);
  const [fetch, setFetch] = useState("");

  useEffect(() => {
    loadCustomers();
  }, []);
  const handleReset = () => {
    loadCustomers();
  };
  const deleteCustomer = async () => {
    await axios.delete(`http://localhost:8080/delete/${fetch}`);
    loadCustomers();
  };
  const loadCustomers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/fetchAllCustomer");
      setCustomers(result.data.listCustomer);
      console.log(result.data);
    } catch (error) {
      console.error("Error loading customers:", error);
    }
  };
  const fetchRecord = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:8080/fetchCustomerId?customerId=${fetch}`)
      .then((Response) => {
        setCustomers(Response.data.customer);
        setFetch("");
      })
      .catch((err) => console.log(err));
  };
  //--Pagination--
  const chunkedCustomers = [];
  for (let i = 0; i < customers.length; i += 10) {
    chunkedCustomers.push(customers.slice(i, i + 10));
  }
  const itemPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const currentCustomers = customers.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div
      className="container responsive"
      style={{
        borderTopLeftRadius: "px",
        borderRadius: "20px",
        // opacity:"0.6"
      }}
    >
      <div className="table mt-2 bg-waring border rounder pt-4 shadow headFetch ">
        <h2
          className="text-center headlist mt3 
        "
          style={{ color: "darkblue" }}
        >
          List Of Customers
        </h2>
        <hr style={{ backgroundColor: "black", height: "2px" }}></hr>
        {/* <form style={{
            margin: "auto",
            padding:"15px",
            maxWidth:"400px",
            alignContent:"center",
          }}
          className="d-flex input-group w-auto"
          onSubmit={fetchRecord}> */}
        {/* <input
            type="text"
            className="form-control"
            placeholder="Search Id..."
            value={fetch}
            onChange={(e) => setFetch(e.target.value)} 
            />
            <button type="submit" className ="btn btn-outline-success">Search</button>
            <button  className="btn btn-outline-danger mx-2" onClick={() => handleReset()}>Reset</button> */}
        {/* </form> */}
        <div
          className="d-flex "
          role="search"
          style={{ justifyContent: "end", marginBottom: "-50px" }}
        >
          {/* <div className="inputGroupContainer">
            <div className="input-group">
              onSubmit={fetchRecord}
              <input
                className="form-control"
                style={{ width: "15%" }}
                type="number"
                value={fetch}
                // onChange={onInputChange}
                onChange={(e)=>setFetch(e.target.value)}
                placeholder="Search"
                aria-label="Search"
              />
              <button type="submit" className ="btn btn-outline-success">Search</button>
               <span className="input-group-text" onSubmit={fetchRecord}>
                <i className="fa fa-search"></i>
              </span> 
            </div>
          </div> */}

          {/* <div className="">
              <button type="submit" className="inputGroupContainer btn btn-danger">
                <span class="input-group-text"><i class="fa fa-search"></i></span>
                </button>
            </div> */}
        </div>
        {/* <div
          style={{ justifyContent: "left", marginTop: "0px" }}
          className="d-flex "
        >
          <Link type="submit" className="btn btn-danger" to={"/add2"}>
            Add Customer
          </Link>
        </div> */}

        <div className="table-responsive mt-3 ">
          {/* class="table table-success table-striped"> */}
          <table className="table table-striped res table-primary ">
            <thead className="table-dark tabletr">
              <tr>
                <th scope="col">CustomerId</th>
                <th scope="col">CustomerName</th>
                <th scope="col">Age</th>
                <th scope="col">E-Mail</th>
                <th scope="col">phone</th>
                <th scope="col">City</th>
                {/* <th scope="col">State</th> */}
                <th scope="col">Salary</th>
                {/* <th scope="col">CreaditLimit</th> */}
                <th scope="col">Gender</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {
                // customers.map((customer, index) => (
                currentCustomers.map((customer, index) => (
                  <tr>
                    <th scope="row" key={index}>
                      {customer.customerId}
                    </th>
                    {/* <td>{customer.customerId}</td> */}
                    <td>{customer.customerName}</td>
                    <td>{customer.customerAge}</td>
                    <td>{customer.eMail}</td>
                    <td>{customer.phoneNumber}</td>
                    <td>{customer.city}</td>
                    {/* <td>{customer.state}</td> */}
                    <td>{customer.salary}</td>
                    {/* <td>{customer.creaditLimit}</td> */}
                    <td>{customer.gender}</td>
                    <td>
                      <Link
                        className=" btn1 btn-outline-primary mx-2"
                      // to={`/updat/${customer.customerId}`}
                      to={`/up/${customer.customerId}`}
                      ><i className="fa fa-upload"></i>

                      </Link>
                      {/* <button
                      className="btn btn-danger"
                      onClick={() => deleteCustomer(customer.customerId)}
                    >
                      <i className="fa fa-delete"></i>
                    </button> */}
                      {/* <Link
                        className=" btn1 btn-outline-primary mx-2"
                        to={`//${customer.customerId}`}
                      ><i className="fa fa-trash"></i>
                       
                      </Link> */}
                      {/* <span class="group-text">
                        <i class="fa fa-user-circle-o" onClick={`/up/${customer.customerId}`} >
                          <Link  to={`/up/${customer.customerId}`}></Link>
                          </i>
                      </span> */}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          {/* Pagination Control */}
          <div className="text-center  pagi">
            <button
              className="b1 mb-1 "
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              previous
            </button>
            <button
              className="b2"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={endIndex >= customers.length}
            >
              Next
            </button>
          </div>
          {/* </table> */}
          {/* <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={customers.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      /> */}
        </div>
      </div>
    </div>
  );
}
