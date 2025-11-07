import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Add2() { 
  const [customers, setCustomers] = useState({
    customerId:"",
    customerName: "",
    customerAge: "",
    eMail: "",
    phoneNumber: "", 
    city: "", 
    salary: "",
    // creaditLimit: "",
    gender: "",
    eMailError:'',
    phoneNumberError:'',
  });
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [existing,setExisting]=useState([]);
  const handleChange = (e) => {
    // console.log(e.target);
    // const{name , value} = e.target;
    // setFormValues({...formValues, [name]: value});
    // console.log(formValues);
    setCustomers({ ...customers, [e.target.name]: e.target.value });

    // setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // const onInputChange = (e) => {
  //   // const { name, value } = e.target;
  //   setCustomers({ ...customers, [e.target.name]: e.target.value });
  //   // setCustomer({...customers,[name]:value,})
  // };
  //
  const handleSubmit = async (e) => {
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
   
    try{
      const result=await 
      axios
        .post(
          "http://localhost:8080/addCustomer",
          customers
          // formValues
        )
          const datas=result.data.customer;
            if(datas===null){
              alert("Add Customer Is Failure")
              setErrors(validateForm(customers))
            // setErrors({ eMailError: "Email Already Exist",
            // phoneNumberError:"Phone Number Already Exist" });
           
            
          // }else if(datas.eMail!==null){
          //   alert("Add Customer Is Failure null not")
          //   setErrors(validateForm(customers))
          //   setErrors({ eMailError: "Email Already Exist",
          //   phoneNumberError:"Phone Number Already Exist" });
            
          } else if(!result.data.customer){
            setErrors({eMailError:"Duplicate Email",phoneNumberError:"Duplicate Number"})
            // setErrors({phoneNumberError:"Dup numb"})
            console.log(' duplicate mail');
          }
          else{
          setCustomers(result.data.customer);
          alert("Added Successfull...");
         
          console.log(result.data);
          // setRecord(true);
          setIsSubmit(true)
          setErrors("")
          }
          // setErrors(validateForm(customers));
        // })
        // .catch((error) => {
        //   console.log("Error added data: " + error);
        // });
      }catch(err){
       
        console.log("Add is error"+err)
      }finally{
        console.log("Add method is clicked")
      }
  };

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(errors);
    }
  }, []);

  return (
    <div className="conatainer mt-0">
      <div className="row responsive">
        <div className="col-md-6 offset-md-3 bg-warning border rounder p-2 mt-4 shadow" style={{opacity:"0.9"}}>
          <h2 className="text-center m-2"> Add Customer</h2>
          {/* <div class="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div> */}
          {/* <form onSubmit={(e) => onSubmite(e)}> */}
          <form
          onSubmit={handleSubmit}>
            {Object.keys(errors).length === 0 && isSubmit ? (
              
              <div style={{}}><p>successful</p>
               <div style={{marginLeft:"35%",textAlign:"center",backgroundColor:"whitesmoke",marginBottom:"0%",width:"30%"}}>
                  <label htmlFor="CustomerName " className="form-table">
                    Customer Id     :  {customers.customerId}
                  </label>
                 
                </div></div>
            ): (""
              // <p>unsuccessful</p>
            )}
            <div className="card-body px-4 py-4">
              <div className="row">
                {/* <div className="form-group mb-3">
                <div className="form-input mb-3"> */}
                <div className="col mb-3">
                  <label htmlFor="CustomerName" className="form-table">
                    Customer Name
                  </label>
                  {/* <div className="inputGroupContainer mb-3">
                    <div class="input-group">
                      <span class="input-group-text">
                        <i class="fa fa-user-circle-o"></i>
                      </span> */}
                  <input
                    type={"text"}
                    className={
                      "form-control"}
                    placeholder="Enter your name"
                    name="customerName"
                    value={customers.customerName}
                    // onChange={handleChange}
                    onChange={handleChange}
                  />
                  {errors.customerName && (
                    <span className="text-danger">{errors.customerName}</span>
                  )}
                </div>
                <div className="col mb-3">
                  
                  <label htmlFor="CustomerAge" className="form-table">
                    CustomerAge 
                  </label>
                  {/* <div className="inputGroupContainer mb-3">
                    <div class="input-group">
                      <span class="input-group-text">
                        <i class="fa fa-user-circle-o"></i>
                      </span> */}
                  <input
                    type={"number"}
                    // className={
                    //   "form-control " +
                    //   (customers.customerAgeError ? "is-invalid" : "")
                    // }
                    className="form-control"
                    placeholder="Enter your name"
                    name="customerAge"
                    value={customers.customerAge}
                    onChange={handleChange}
                  />
                  {/* </div> */}
                  {errors.customerAge && (
                    <span className="text-danger">{errors.customerAge}</span>
                  )}
                  {/* </div> */}
                </div>
              </div>

              {/* </Row> */}
              <div className="row">
                <div className="col mb-3">
                  <label htmlFor="E-Mail" className="form-table">
                    E-Mail
                  </label>
                  {/* <div className="inputGroupContainer mb-3">
                    <div class="input-group">
                      <span class="input-group-text">
                        <i class="fa fa-user-circle-o"></i>
                      </span> */}
                  <input
                    type={"text"}
                    // className={
                    //   "form-control" +
                    //   (customers.eMailError ? "is-invalid" : "")
                    // }
                    className={"form-control"}
                    placeholder="Enter your name"
                    name="eMail"
                    value={customers.eMail}
                    onChange={handleChange}
                  />
                  {/* </div> */}
                  {errors.eMail ? (
                    <span className="text-danger">{errors.eMail}</span>
                  ):(<span className="text-danger">{errors.eMailError}</span>)}
                </div>
                <div className="col mb-3">
                  <label htmlFor="PhoneNumber" className="form-table">
                    PhoneNumber
                  </label>
                  {/* <div className="inputGroupContainer mb-3">
                    <div class="input-group">
                      <span class="input-group-text">
                        <i class="fa fa-user-circle-o"></i>
                      </span> */}
                  <input
                    type={"text"}
                    className={"form-control"}
                    placeholder="Enter your name"
                    name="phoneNumber"
                    maxLength={10}
                    value={customers.phoneNumber}
                    onChange={handleChange}
                  />
                  {/* </div> */}
                  {errors.phoneNumber ? (
                    <span className="text-danger">{errors.phoneNumber}</span>
                  ):(<span className="text-danger">{errors.phoneNumberError}</span>)}
                </div>
              </div>
              <div className="row">
                <div className="col mb-3">
                  <label htmlFor="City" className="form-table">
                    City
                  </label>
                  {/* <div className="inputGroupContainer mb-3">
                    <div class="input-group">
                      <span class="input-group-text">
                        <i class="fa fa-user-circle-o"></i>
                      </span> */}
                  <select
                    className={"form-control"}
                    id="productdetails"
                    value={customers.city}
                    name="city"
                    // size={1}
                    // style={{height:"100px"}}
                    onChange={handleChange}
                  >
                    <option value="">--Select--</option>

                    <option value="Ariyalur">Ariyalur</option>
                    <option value="Chengalpattu">Chengalpattu</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Cuddalore">Cuddalore</option>
                    <option value="Dharmapuri">Dharmapuri</option>
                    <option value="Dindugal">Dindugal</option>
                    <option value="Erode">Erode</option>
                    <option value="Kallakurichi">Kallakurichi</option>
                    <option value="Kanchipuram">Kanchipuram</option>
                    <option value="Karur">Karur</option>
                    <option value="Krishnagiri">Krishnagiri</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Mayiladuthurai">Mayiladuthurai</option>
                    <option value="Nagapattinam">Nagapattinam</option>
                    <option value="Kanniyakumari">Kanniyakumari</option>
                    <option value="Namakkal">Namakkal</option>
                    <option value="Perambalure">Perambalure</option>
                    <option value="Pudukottai">Pudukottai</option>
                    <option value="Ramanadhapuram">Ramanadhapuram</option>
                    <option value="Ranipet">Ranipet</option>
                    <option value="Salem">Salem</option>
                    <option value="Sivagangai">Sivagangai</option>
                    <option value="Tenkasi">Tenkasi</option>
                    <option value="Thanjavur">Thanjavur</option>
                    <option value="Theni">Theni</option>
                    <option value="Thiruvallure">Thiruvallure</option>
                    <option value="Thiruvarur">Thiruvarur</option>
                    <option value="Thoothukudi">Thoothukudi</option>
                    <option value="Trichirappalli">Trichirappalli</option>
                    <option value="Thirunelveli">Thirunelveli</option>
                    <option value="Triuppure">Triuppure</option>
                    <option value="Triruvannamalai">Triruvannamalai</option>
                    <option value="Nilagiri">Nilagiri</option>
                    <option value="Vellore">Vellore</option>
                    <option value="Villupuram">Villupuram</option>
                    <option value="Virudhunagar">Virudhunagar</option>
                  </select>

                  {/* </div> */}
                  {errors.city && (
                    <span className="text-danger">{errors.city}</span>
                  )}
                </div>
                {/* <div className="col">
                  <div className="mb-3">
                    <label htmlFor="State" className="form-table">
                      State
                    </label>
                  
                    <select
                      id="productdetails"
                      value={customers.state}
                      name="state"
                      onChange={handleChange}
                      className={"form-control "}
                    >
                      <option value="">--Select--</option>

                      <option value="TamilNadu">TamilNadu</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Andhra Pradhesh">Andhra Pradhesh</option>
                      <option value="Karnataka">Karnataka</option>
                    </select>
                     {errors.state && (
                      <span className="text-danger">{errors.state}</span>
                    )}  </div>
                </div> */}
                {/* <div className="row py-2"> */}
                {/* <div className="col">
                <div
                  className={
                    "mb-3 " + (customers.genderError ? "is-invalid" : "")
                  }
                >
                  <div
                    className="col-xl-8"
                    onChange={(e) => onInputChange(e)}
                    checked={customers.gender}
                  >
                    Gender:
                    <input
                      type="radio"
                      value="Male"
                      name="gender"
                      className="mx-2"
                    />
                    Male
                    <input
                      type="radio"
                      value="Female"
                      name="gender"
                      className="mx-2"
                    />
                    Female
                  </div>
                </div>
                <span className="text-danger">
                  {customers.genderError ? customers.genderError : ""}
                </span>
              </div> */}
              </div>
              <div className="row">
              <div className="col">
                  <div className="mb-3">
                    <label htmlFor="Gender" className="form-table">
                      Gender
                    </label>
                    {/* <input
                type={"text"}
                className="form-control"
                 placeholder="Enter your name"
                 name="state"
                 value={state}
                 onChange={(e)=>onInputChange(e)}
                 > */}
                    <select
                      id="productdetails"
                      value={customers.gender}
                      name="gender"
                      onChange={handleChange}
                      // className={
                      //   "form-control " +
                      // (customers.stateError ? "is-invalid" : "")
                      // }
                      className={"form-control "}
                    >
                      <option value="">--Select--</option>

                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    {/* <span className="text-danger">
                      {customers.stateError ? customers.stateError : ""}
                    </span> */}
                    {errors.gender && (
                      <span className="text-danger">{errors.gender}</span>
                    )}
                    {/* <p>{formErrors.gender}</p> */}
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="Salary" className="form-table">
                      Salary
                    </label>
                    <input
                      type={"number"}
                      // className={
                      //   "form-control" +
                      //   (customers.salaryError ? "is-invalid" : "")
                      // }
                      className={"form-control"}
                      placeholder="Enter your salary"
                      name="salary"
                      value={customers.salary}
                      onChange={handleChange}
                    />
                    {/* <span className="text-danger">
                      {customers.salaryError ? customers.salaryError : ""}
                    </span> */}
                    {errors.salary && (
                      <span className="text-danger">{errors.salary}</span>
                    )}
                    {/* <p>{formErrors.salary}</p> */}
                  </div>
                </div>
                {/* <div className="col">
                  <div className="mb-3">
                    <label htmlFor="CreaditLimit" className="form-table">
                      CreaditLimit
                    </label>
                    <input
                      type={"number"}
                      // className={
                      //   "form-control" +
                      //   (customers.creaditLimitError ? "is-invalid" : "")
                      // }
                      className={"form-control"}
                      placeholder="Enter your Creadit Limit"
                      name="creaditLimit"
                      value={customers.creaditLimit}
                      onChange={handleChange}
                    />
                    {errors.creaditLimit && (
                      <span className="text-danger">{errors.creaditLimit}</span>
                    )}
                  </div>
                </div> */}
              </div>

              <div style={{ textAlign: "center" }}>
                <button type="submit"
                // onClick={handleSubmit}
                 className="btn btn-outline-primary ">
                  Submit
                </button>
                {/* <button
                  type="clear"
                  className="btn btn-outline-danger mx-2 text-center"
                >
                  Cancel
                </button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  
  function validateForm() {
    let errors = {};
    // if (!customers.customerId.trim()) {
    //   errors.customerId = "Id is required";
    // }
    let isValid=true;
    // if (name.trim()==='') {
    // 	document.getElementById('sname').style.color='red';
    // 	document.getElementById('sname').innerText='name is required';
    //   isValid=false;    
    // }else if(name.length<2){
    //   document.getElementById('sname').style.color='red';
    //   document.getElementById('sname').textContent='Name is more tha 2 letters';
    //   isValid=false;
    // }
    // else{
    // 	document.getElementById('sname').textContent=' ';
    // }
    if (customers.customerName==="") {
      errors.customerName = "Name is required";
      // alert("required")
      console.log("name is requered")
      // if (c.getCustomerName().isBlank() &&
      //  !c.getCustomerName().matches(".*\\d.*")) {
     
    }else if(customers.customerName<2){
      // c.getCustomerName().length() < 3)
      errors.customerName="Name is minimum 2 letters."
      // alert("length")
    }else if(customers.customerName.length>13){
      errors.customerName="Name is maximum 14 letters."
    // } else if (!customers.customerName.matchAll(".*\\d.*")) {
    } else if (!customers.customerName.matchAll("^[A-Za-z]+$")) {
      errors.customerName="Name is Does'n match"
    }
    if (customers.customerAge==="") {
      errors.customerAge = "Age is required";
    }else if(customers.customerAge<18){
      errors.customerAge="Age is Above 18"
    }else if(customers.customerAge>50){
      errors.customerAge="Age is Below 50"
    }
    if (customers.gender==="") {
      errors.gender = "gender is required";
    }
    if (customers.city==="") {
      errors.city = "City is required";
    }
    if (customers.salary==="") {
      errors.salary = "Salary is required";
    }else if(customers.salary<15000){
      // c.getCustomerName().length() < 3)
      errors.salary="Salary is minimum 15,000 ."
      // alert("length")
    }
    else if(customers.salary>50000){
      errors.salary="Salary is maximum 50,000 ."
    }
    // if (customers.state==="") {
    //   errors.state = "State is required";
    // }
    // if (customers.creaditLimit==="") {
    //   errors.creaditLimit = "CreaditLimit is required";
    // }else if(customers.creaditLimit.length<2){
    //   // c.getCustomerName().length() < 3)
    //   errors.customerName="Name is minimum 2 letters."
    //   // alert("length")
    // }else if(customers.customerName.length>13){
    //   errors.customerName="Name is maximum 14 letters."
    // }
   
const isDuplicateEmail=existing.some((entry)=>entry.eMail===customers.eMail);

const isDuplicatePhone=existing.some((entry)=>entry.phoneNumber===customers.phoneNumber);
if(isDuplicateEmail||isDuplicatePhone){
  errors.phoneNumber="this number is already used";
  errors.eMail="this Email is already used";  
alert("duplicate violation")
}
    if (customers.eMail==='') {
      errors.eMail = "Email is required";
      // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(customers.email)) {
      // ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$
    } else if (
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/i
        .test
        // customers.email="Invalid Email"
        ()
    ) {
      
      errors.eMail = "Invalid email address";
    }

    if (customers.phoneNumber==='') {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^[0-9]{10}$/i.test(customers.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }

    return errors;
  }
}
