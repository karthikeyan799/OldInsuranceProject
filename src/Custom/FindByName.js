import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function FindByName() {
  const [customers, setCustomers] = useState({
    customerName: "",
  });
  const [fetch, setFetch] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  
// const recod=[];
  const loadCustomers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/fetchAllCustomer");
      setFetch(result.data.listCustomer);
      // setFilteredCustomers(result.data.listCustomer);
      console.log(result.data);
    } catch (error) {
      console.error("Error loading customers:", error);
    }
  };
  useEffect(() => {
    // loadCustomers();
  }, []);
  // const fetch = [];
  const onInputChange = (e) => {
    setCustomers({ customerName: e.target.value });
    // setCustomers(e.target.value );
  };

  const validInput = () => {
    if (!customers.customerName.trim()) {
      alert("Please enter a valid name.");
      return false;
    }
   
    // else if(customers.customerName.match){
    //   alert("mis matching");
    //   return false;
    // }
    return true;
  };
  const [errors, setErrors] = useState("");
  const[fet,setFet]=useState(false);
  const FindByName = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(customers);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit it
      // You can perform an API call or further actions here

      console.log("Form data is valid:", customers);
    } else {
      // Form is not valid, display errors
      setErrors(validationErrors);
    }

    if (validInput()) {
      // const result = await
      axios
        .get(
          `http://localhost:8080/findByCustomerName?customerName=${customers.customerName}`
        )
        .then((result) => {
          const total = result.data.customized;

          if (total === 0) {
            alert("No Matched Records.");
          }//not display
          if (total === null) {
            // console.
            // setCurrentCustomers(false);
            // currentCustomers(false);
            // setCustomers(false)
            setErrors('No Matches Record.......')
            setFet(false)
             alert(customers.customerName+"  No records Matches");
            errors.customerName = "No Maching required";
            // setFetch(total)
           
         
          }else{

          setErrors("")
         setFet(true)
          setFetch(total); 
          console.log(total);
          alert(customers.customerName+'  FindByName is Successfull')
          // setCurrentCustomers(true);
          }
        })
        .catch((err) => {
          console.log("Error fetching data: ", err);
        });
    }
  };

    
  const handleSearchChange = (event) => {
    setCustomers(event.target.value);
  };
  // const itemPerPage = 10;
  // const [currentPage, setCurrentPage] = useState(1);

  // const startIndex = (currentPage - 1) * itemPerPage;
  // const endIndex = startIndex + itemPerPage;
  //    const currentCustomers = fetch.slice(startIndex, endIndex);

  // const handlePageChange = (newPage) => {
  //   setCurrentPage(newPage);
  // };
  return (
    <div>
      <div
        className="container mt-4 mb-5 "
        style={{ backgroundColor: "" }}
      >
        <div className="row"> 
          <div className="bg-warning border rounder p-4 shadow">
            <div
              className="d-flex"
              // style={{ width: "15%" }}
              role="search"
              // style={{ justifyContent: "right" }}
            >
              <h2>FindByName </h2>
              {/* {errors.customerName && (
                    <span className="text-danger">{errors.customerName}</span>
                  )} */}
                    {/* {errors.customerName ? (
                    <span className="text-danger">{errors.customerName}</span>):
                 
                  (  <span className="text-success">{errors}</span> )}  */}
              <div
                className="inputGroupContainer"
                style={{ marginLeft: "62%" }}
              >
                <div className="input-group">
                  <input
                    className="form-control"
                    type="search"
                    name="customerName"
                    value={customers.customerName}
                    aria-label="Search"
                    onChange={onInputChange}
                    // onChange={handleSearchChange}
                    style={{ width: "15%" }}
                    placeholder="FetchByName"
                  />
                
                  <span className="input-group-text">
                    <i className="fa fa-search"
                     onClick={FindByName}
                    typeof="submit"
                    ></i>
                  </span>
                  {/* <span className="input-group-text">
                    <i className="fa fa-undo" onClick={onInputChange}
                    ></i>
                  </span> */}
                  {/* <button type="reset">Reset</button> */}
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="text-center">{errors.customerName ? (
                    <span className="text-danger">{errors.customerName}</span>):
                 
                  (  <span className="text-danger">{errors}</span> )} </div>
            {/* {customers.customerName && ( */}
            {/* {fet&&( */}
              <div className="table-responsive res">
                <table className="table table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">CustomerName</th>
                      {/* <th scope="col">CustomerAge</th> */}
                      <th scope="col">E-Mail</th>
                      {/* <th scope="col">phone</th> */}
                      <th scope="col">City</th>
                      {/* <th scope="col">State</th> */}
                      {/* <th scope="col">Salary</th> */}
                      {/* <th scope="col">CreaditLimit</th> */}
                      {/* <th scope="col">Gender</th> */}
                      {/* <th scope="col">Update</th> */}
                    </tr>
                  </thead>
                  {/* {!customers.customerName &&( */}
                  {/* {currentCustomers && ( */}
                  {fet&&(
                  <tbody>
                    {/* {fetch.map((name,i) => ( */}
                  {/* {currentCustomers.map((name, i) => ( */}
                  {fetch.map((name,i) => (
                      <tr>
                        <td>{(i = i + 1)}</td>
                        {/* <td>{name.customerId}</td> */}
                        <td key={name.customerId}>{name.customerName}</td>

                        <td>{name.email} </td>
                        <td>{name.city} </td>
                       
                      </tr>
                    ))}
                    
                  </tbody>)}
                    {/* )  
                    // : (  <p>No Records Maches </p>  )
                  } */}
                </table>
               
              {/* <div>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={endIndex >= fetch.length}
            >
              Next
            </button>
          </div> */}

              </div>
              {/* // )} */}
             {/* ):(<p>No Matches Record</p>)}   */}
            {/* ) 
            //  (  <p>No Records Maches </p>  )
            } */}
            {/* {currentCustomers.length===0 ?(
                <li>No Records</li>
              ):  */}
          {/* // </div>  */}
          {/* Pagination Control */}
        {/* <div>
      <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={endIndex >= fetch.length}
            >
              Next
            </button>
          </div> */}
          </div>
          {/* <button onClick={()=>setCurrentPage(currentPage-1)}>previous</button>
              <button onClick={()=>setCurrentPage(currentPage+1)}>next</button> */}
        </div>
      </div>
    </div> 
  )
  function validateForm() {
    let errors = {};
    // if (!customers.customerId.trim()) {
    //   errors.customerId = "Id is required";
    // }

    if (customers.customerName==='') {
      errors.customerName = "Name is required";
      setFet(false)
      alert("Name is required");
      // setFilteredCustomers([])
    }
    else if(customers.customerName===null){
      errors.customerName="No Matches Record..."
      alert('No Matches Record')
    }

    return errors;
  }
}
