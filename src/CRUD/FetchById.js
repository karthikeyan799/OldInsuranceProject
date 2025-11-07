// import React, { Component, useState ,useEffect} from 'react'
import axios from "axios";
import React, { useState } from "react";
export default function FetchById() {
  const [fetch, setFetch] = useState({
    customerId: '',
    customerName: ""
  });
  const [records, setRecord] = useState(false);
  // const {id} =useParams();cmd
  const [errors, setErrors] = useState({});

  const onInputChange = (e) => {
    setFetch({ customerId: e.target.value });
    // record:true;
    // setRecord(true);
  };
  // const [isValid,setIsValid]=useState(false);
  //  isValid=/^\d+$/.test(fetch.customerId)&& fetch.customerId.length===0;

  // const [isValid,setIsValid]=useState(false); cmd
  const fetchRecord = async () => {
    const validationErrors = validateForm(fetch);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit it
      // You can perform an API call or further actions here
      //  alert("FetchId id sucess")

      console.log("Form data is valid:", fetch);
    } else {
      // Form is not valid, display errors
      // alert("FetchId is error")
      setErrors(validationErrors);
    }
    //  const validError=
    //  isValid=/^[A-Z]?\d{1}$/.test(fetch.customerId);
    // setRecord(isValid);
    try {
      const record = await axios.get
        (
          // `http://localhost:8080/fetchCustomerId?customerId=${fetch.customerId}`,
           `https://springprojectinsurance-production-87a1.up.railway.app/fetchCustomerId?customerId=${fetch.customerId}`,
          {

            // customerId: `${fetch.customerId}` 
          });
      const rec = record.data.customer;
      // setFetch(record.data.customer);

      // if(rec===0){
      //   errors.customerId = "CustomerId is NOt 0";
      //   alert("No Matched Records")
      // }

      if (rec === null) {
        // errors.customerId="CustomerId is NOt Found demo";
        alert("CustomerId is Not Found ");
        // setErrors(validateForm(fetch))
        // errors.customerId="invalidid"
        setRecord(false)
      }
      else {

        setFetch(rec);
        // alert("successfull karthi")
        console.log(rec)
        setErrors("")
        setRecord(true)

      }
      // setRecord(true)
      // setFetch(rec);

      // console.log(record.data);
      // if(!fetch.customerId.trim()){
      //   errors.customerId = "CustomerId is NOt Found";
      //   alert("CustomerId is NOt Found");
      // }
      //  setRecord(true)

    } catch (err) {
      // setErrors("Customer Id is not found")
      //  alert("Customer Id is not found");
      console.log("id not found " + err)
    } finally {
      console.log("Fetch method is clicked")
    }

    // if(!fetch.customerId===0){
    //   errors.customerId = "CustomerId is NOt Found";
    //   alert("CustomerId is NOt Found");
    // }
    //   setRecord(true);


  }
  // const lop=[];
  // const date=isValidate(fetch.customerId);
  // const [isValid,setIsValid]=useState(false); 
  //  isValid=/^[A-Z]?\d{1}$/.test(fetch.customerId);
  // setRecord(isValid);
  function validateForm() {
    let errors = {};
    if (fetch.customerId === "") {
      errors.customerId = "Please select Id"
      alert("Id is Required")
    }
    else if (!fetch.customerId) {
      errors.customerId = "Invalid  Id"
      alert("Invalid  Id");
    }

    else if (!/^[A-Za-z0-9]+$/.test(fetch)) {
      errors.customerId = 'Invalid Customer ID  ' + fetch.customerId;
      // alert("id")
    }
    else if (fetch.customerId.length === 0) {
      errors.customerId = "Invalid select Id"
      // setIsValid(date)
    }
    else if (!/^\d+$/.test(fetch.customerId)) {
      errors.customerId = "mached no&&"
      alert("moached &&o")
    }

    return errors;
  }

  // const [isSubmit, setIsSubmit] = useState(null)cmd
  return (
    <div
      className="container"
      style={{ borderTopLeftRadius: "50px" }}
    >
      <div className="table">
        {/* <h1 className="text-center text-success mt-3 ">FetchById</h1> */}
        {/* <hr style={{ backgroundColor: "black", height: "2px" }}></hr> */}
        <div style={{ width: "30%", marginLeft: "35%" }}>
          {/* <div className=" offset-md-8 bg-light border rounder p-4 mt-5 shadow"style={{width:"400px"}}> */}

          <h1 className="text-center text-success mt-3 ">FetchById</h1>
          <div
            className="d-flex"
            role="search"
            style={{ justifyContent: "center", marginBottom: "20px" }}
          >
            <div className="inputGroupContainer">
              <div className="input-group">
                <input
                  className="form-control"
                  type="number"
                  value={fetch.customerId}
                  placeholder="Search"
                  aria-label="Search"
                  onChange={onInputChange}
                  style={{ width: "15%" }}
                  required
                />

                <span className="input-group-text">
                  <i className="fa fa-search" onClick={fetchRecord}></i>
                </span>
              </div>
              {errors.customerId &&
                <span className="text-danger">
                  {errors.customerId}</span>}
            </div>
          </div>
          {/* {errors.customerId && 
          <span className="text-danger">
            {errors.customerId}</span>} */}

        </div>

        {/* {records?( */}

        <div class="container responsive bg-light">
          {/* <hr/>  */}
          {/* {errors.customerId && 
          <span className="text-danger">
            {errors.customerId}</span>} */}
          {records ? (
            <div class="well form-horizontal" id="contact_form"
              name="myForm" style={{ width: "", alignContent: "center" }}>

              <div className="col offset-md- border
    rounder shadow"style={{ paddingLeft: "21%", marginTop: "-10px" }}>

                <div className="row " style={{ paddingLeft: "20%" }}>

                  <div class="row mb-3">
                    {errors.customerId &&
                      <span className="text-danger">
                        {errors.customerId}</span>}
                    <label class="col-sm-4 col-md-4 control-label">Customer Id:</label>
                    <div class="col-sm-7 col-md-6 inputGroupContainer">
                      {fetch.customerId}
                      <div class="input-group">
                        {/* <span class="input-group-text"><i class="fa fa-user-circle-o"></i></span> */}
                        {/* <input id="id" name="id"value={fetch.customerId} placeholder="Customer Id" class="form-control" type="number"/> */}
                      </div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-4 col-md-4 control-label">Customer Name:</label>

                    <div class="col-sm-7 col-md-6 inputGroupContainer">
                      {fetch.customerName}
                      <div class="input-group">
                        {/* <span class="input-group-text"><i class="fa fa-user"></i></span> */}
                        {/* <input id="name"value={fetch.customerName} name="name" placeholder="Customer Name" class="form-control" type="text"/> */}
                        {/* {fetch.customerName} */}
                      </div>
                    </div>
                  </div>

                  {/* <!-- Text input--> */}
                  <div class="row mb-3">
                    <label class="col-sm-4 control-label">Customer Age:</label>
                    <div class="col-sm-7 col-md-6 inputGroupContainer">
                      {fetch.customerAge}
                      <div class="input-group">
                        {/* <span class="input-group-text"><i class="fa fa-child"></i></span> */}
                        {/* <input id="age" name="age"value={fetch.customerAge }placeholder="Customer Age" class="form-control" type="number"/> */}
                      </div>
                    </div>
                  </div>

                  {/* <!-- Text input--> */}
                  <div class="row mb-3">
                    <label class="col-sm-4 col-md-4 control-label ">Gender:</label>
                    <div class="col-sm-7 col-md-6 inputGroupContainer">
                      {fetch.gender}
                      <div class="input-group">
                        {/* <span class="input-group-text"><i class="fa fa-credit-card"></i></span> */}
                        {/* <input id="credit" name="credit"value={fetch.gender} placeholder="Credit Limit" class="form-control" /> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- Text input--> */}
                  <div class="row mb-3">
                    <label class="col-sm-4 col-md-4 control-label">E-Mail:</label>
                    <div class="col-sm-7 col-md-6 inputGroupContainer">
                      {fetch.eMail}
                      <div class="input-group">
                        {/* <span class="input-group-text"><i class="fa fa-envelope"></i></span> */}
                        {/* <input id="email" name="email"value={fetch.eMail} placeholder="E-Mail Address" class="form-control" type="text"/> */}
                      </div>
                    </div>
                    {/* <!-- <span id="spnEmail"></span> --> */}
                  </div>


                  {/* <!-- Text input--> */}

                  <div class="row mb-3">
                    <label class="col-sm-4 col-md-4 col-l-4 control-label">PhoneNumber :</label>
                    <div class="col-sm-7 col-md-6 col-l-6 inputGroupContainer">
                      {fetch.phoneNumber}
                      <div class="input-group">
                        {/* <span class="input-group-text"><i class="fa fa-phone"></i></span> */}
                        {/* <input id="phone" name="phone"value={fetch.phoneNumber} placeholder="(845)555-1212" class="form-control" type="number"/> */}
                      </div>
                    </div>
                  </div>

                  {/* <!-- Text input--> */}

                  <div class="row mb-3">
                    <label class="col-sm-4 col-md-4 control-label">City:</label>
                    <div class="col-sm-7 col-md-6 inputGroupContainer">
                      {fetch.city}
                      <div class="input-group">
                        {/* <span class="input-group-text"><i class="fa fa-home"></i></span> */}
                        {/* <input id="address" name="address"value={fetch.city} placeholder="Address" class="form-control" type="text"/> */}
                      </div>
                    </div>
                  </div>


                  {/* <!-- Text input--> */}

                  {/* <div class="row mb-3">
      <label class="col-sm-4 col-md-4 control-label">State:</label>
      <div class="col-sm-7 col-md-6 inputGroupContainer">
        {fetch.state} 
        <div class="input-group">
         </div> 
      </div>
    </div> */}


                  {/* <!-- Text input--> */}

                  <div class="row mb-3">
                    <label class="col-sm-4 col-md-4 control-label">Salary:</label>
                    <div class="col-sm-7 col-md-6 inputGroup">
                      {fetch.salary}
                      <div class="input-group">
                        {/* <span class="input-group-text"><i class="fa fa-inr"></i></span> */}
                        {/* <input id="salary" name="salary"value={fetch.salary} placeholder="salary" class="form-control" type="text"/> */}
                      </div>
                    </div>
                  </div>

                  {/* <!-- Text input--> */}

                  {/* <div class=" row mb-3">
      <label class="col-sm-4 col-md-4  control-label ">Credit Limit:</label>
      <div class="col-sm-7 col-md-6 inputGroupContainer">
      {fetch.creaditLimit}
    <button id="policy" className="btn btn-danger">Policy</button>
        <div class="input-group">     </div> 
      </div>
    </div> */}

                </div>
                <p>
                  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Button with data-bs-target
                  </button>
                </p>
                <div class="collapse" id="collapseExample">
                  <div class="card card-body">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>
                </div>

                {/* <div class="row">
       <label class="col-sm-4 col-md-4 control-label"></label>
       <div class="col-sm-7 col-md-6">
        
         <button class="btn btn-success button" href="/fetch" ><span class="fa fa-undo">  Reset</span></button>
       </div>
     </div> */}
              </div>
            </div>

          )
            : ""
          }
        </div>
        {/* // ):(<p>Invalid Id</p>)
// } */}

      </div>
    </div>
  );
}
