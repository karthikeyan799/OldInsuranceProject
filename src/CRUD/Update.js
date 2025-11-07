import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Update() {
  // let navigate = useNavigate();
  const { customerId } = useParams();
  const [errors, setErrors] = useState({});
  // const [fetch, setFetch] = useState({
  //   customerId: "",
  // });cmd
  
  const [isSubmit, setIsSubmit] = useState(false);
  const [customers, setCustomer] = useState({
    customerId: "",
    customerName: "",
    customerAge: "",
    eMail: "",
    phoneNumber: "",
    city: "",
    state: "",
    salary: "",
    // creaditLimit: "",
    gender: "",
    eMailError: "",
    phoneNumberError: "",
  });

  // const onIdChange = (e) => {
  //   setFetch({ customerId: e.target.value });
  //   // record:true;
  //   // setRecord(true);
  // };cmd
  const onInputChange = (e) => {
    setCustomer({ ...customers, [e.target.name]: e.target.value });
  };
   useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(errors);
    };
    loadCustomer();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrorsUpdate = validateFormUpdate(customers.customerId);
    if (Object.keys(validationErrorsUpdate).length === 0) {
      // Form is valid, submit it
      // You can perform an API call or further actions here

      console.log("Form data is valid:", customers);
    } else {
      // Form is not valid, display errors
      setErrors(validationErrorsUpdate);
    }
    // if(validateForm()) {
    try {
      const result = await axios.post(
        `http://localhost:8080/updateCustomer?customerId=${customers.customerId}`,
        customers
      );
      const datas = result.data.customer;
      if (datas === null) {
        // alert("Update Customer Is Failure");
        setErrors(validateForm(customers));
        // setErrors({ eMailError: "Email Already Exist",
        //     phoneNumberError:"Phone Number Already Exist" });
      } else {
        setCustomer(result.data.customer);
        alert("Customer Id "+customers.customerId+" Update Successfull...");

        console.log(datas);
        // setRecord(true);
        setIsSubmit(true)
        setErrors("");
      }
    } catch (err) {
      console.log("Add is error" + err);
    } finally {
      console.log("Update method is clicked");
    }
    // `http://localhost:8080/updateCustomer?customerId=customerId}`,customers);

    //  alert("Updated successfully...");
    // // navigate("/fetchAll");
    // setCustomer(result.data.customer);
    // console.log(result.data.customer);
    // alert("Updated successfully...");
    // } catch (err) {
    //   console.log(err);
    // } finally {
    //   console.log("Update Finally ");
    // }
  };
  function validateForm() {
    let errors = {};
    if (customers.customerId === "") {
      errors.customerId = "Please select Id";
      alert("Id is Required");
    } 
    // else if (!/^[A-Za-z0-9]+$/.test(customers)) {
    //   errors.customerId = "Invalid characters in Customer ID";
    //   // alert("id")
    // } 
    else if (customers.customerId.length === 0) {
      errors.customerId = "Invalid select Id";
      // setIsValid(date)
    } else if (!/^\d+$/.test(customers.customerId)) {
      errors.customerId = "mached no&&";
      alert("moached &&o");
    }

    return errors;
  }
  const loadCustomer = async () => {
    const validationErrors = validateForm(customers);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit it
      // You can perform an API call or further actions here
      //  alert("FetchId id sucess")

      console.log("Form data is valid:", customers);
    } else {
      // Form is not valid, display errors
      // alert("FetchId is error")
      setErrors(validationErrors);
    }
    try {
      const record = await axios.get(
        // `http://localhost:8080/fetchCustomerId?customerId=${customers.customerId}`
             `http://localhost:8080/fetchCustomerId?customerId=${customerId}`
      );
      // alert("updated successfull");
      // setCustomer(record.data.customer);
      // console.log(record.data);
      const rec = record.data.customer;

      if (rec === null) {
        alert("CustomerId is NOt Found ");
        // errors.customerId = "invalidid";
        // setCustomer(rec)
        // setValid(false);cmd
      } else {
        // setFetch(rec);
        setCustomer(rec);
        // alert("successfull karthi");
        console.log(rec);
        setErrors("");
        // setValid(true);cmd
      }
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };
  // const [valid, setValid] = useState(false);cmd
  return (
    <div className="container" style={{ borderTopLeftRadius: "50px" }}>
      {/* <div className="table"> */}
      {/* <h1 className="text-center text-success mt-3 ">FetchById</h1> */}
      {/* <hr style={{ backgroundColor: "black", height: "2px" }}></hr> */}
      <div style={{ width: "30%", marginLeft: "35%" }}>
        {/* <div className=" offset-md-8 bg-light border rounder p-4 mt-5 shadow"style={{width:"400px"}}> */}

        <h1 className="text-center text-success mt-3 ">Update</h1>
        <div
          className="d-flex"
          role="search"
          style={{ justifyContent: "center", marginBottom: "20px" }}
        >
          <div className="inputGroupContainer">
            <div className="input-group">
              <input
                className="form-control"
                type={"number"}
                value={customers.customerId}
                onChange={(e) => onInputChange(e)}
                placeholder="Search"
                aria-label="Search"
                name="customerId"
                // onChange={onInputChange}
                style={{ width: "15%" }}
                // required
              />
              <span className="input-group-text">
                <i className="fa fa-search" onClick={loadCustomer}></i>
              </span>
            </div>
            {errors.customerId && (
              <span className="text-danger">{errors.customerId}</span>
            )}
          </div>
        </div>
      </div>

      {/* {valid ? ( */}
      <div className="conatainer ">
        {/* {valid ? ( //karthi */} 
          <form   
            // onClick={(e) => onSubmit(e)}
            onSubmit={(e)=>onSubmit(e)}
            // onSubmit={onSubmit()}
          // onSubmit={handleSubmit}
          >
            {/* {valid ? ( */}
            <div className="row ">
              <div
                className="col-md-6 offset-md-3 bg-warning border rounder p-4 mt-2 mb-4 shadow"
                style={{opacity: "0.9" }}
              >
                <h2 className="text-center m-2"> Update Customer</h2>
                {/* <form onSubmit={(e) => onSubmit(e)}> */}
                <div>
                  <div className="row">
                 
            {/* {Object.keys(errors).length === 0 && isSubmit ? (
            <p className="text-success">  Update Customer Id {customers.customerId}
             is successfully...</p>
              
                // ""
            ):""
            //  (  <p className="text-success">  Update Customer Id {customers.customerId} is successfully...</p>
              // <p>unsuccessful</p>
            // )
          } */}
                    {/* <div className="form-group mb-3">
                <div className="form-input mb-3"> */}
                    {/* <div className="col"> */}
                    {/* <div className="mb-3">
                      <label htmlFor="CustomerId" className="form-table">
                        customer Id
                      </label>
                      <input
                        type={"number"}
                        className="form-control"
                        placeholder="Enter your Id"
                        name="customerId"
                        value={customers.customerId}
                        onChange={(e) => onInputChange(e)}
                      />{" "}
                      {errors.customerId && (
                        <span className="text-danger">{errors.customerId}</span>
                      )}
                    </div> */}
                    {/* </div>  */}
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="CustomerName" className="form-table">
                          customer Name
                        </label>
                        <input
                          type={"text"}
                          className="form-control"
                          placeholder="Enter your name"
                          name="customerName"
                          value={customers.customerName}
                          onChange={(e) => onInputChange(e)}
                        />
                        {errors.customerName && (
                          <span className="error">{errors.customerName}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="CustomerAge" className="form-table">
                          CustomerAge
                        </label>
                        <input
                          type={"number"}
                          className="form-control"
                          placeholder="Enter your name"
                          name="customerAge"
                          value={customers.customerAge}
                          onChange={(e) => onInputChange(e)}
                        />
                        {errors.customerAge && (
                          <span className="text-danger">
                            {errors.customerAge}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="E-Mail" className="form-table">
                          E-Mail
                        </label>
                        <input
                          type={"text"}
                          className="form-control"
                          placeholder="Enter your name"
                          name="eMail"
                          value={customers.eMail}
                          onChange={(e) => onInputChange(e)}
                        />
                        {errors.eMail && (
                          <span className="text-danger">{errors.eMail}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="PhoneNumber" className="form-table">
                          PhoneNumber
                        </label>
                        <input
                          type={"text"}
                          className="form-control"
                          placeholder="Enter your name"
                          name="phoneNumber"
                          value={customers.phoneNumber}
                          onChange={(e) => onInputChange(e)}
                        />
                        {errors.phoneNumber && (
                          <span className="text-danger">
                            {errors.phoneNumber}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="City" className="form-table">
                          City
                        </label>
                        {/* <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your name"
                  name="city"
                  value={city}
                  onChange={(e) => onInputChange(e)}
                ></input> */}
                        <select
                          className={
                            "form-control" +
                            (customers.cityError ? "is-invalid" : "")
                          }
                          id="productdetails"
                          value={customers.city}
                          name="city"
                          onChange={(e) => onInputChange(e)}
                        >
                          <option value="0">Select</option>
                          <option value="8450" hidden>
                            Respect Senior Care Rider
                          </option>
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
                          <option value="Triruvannamalai">
                            Triruvannamalai
                          </option>
                          <option value="Nilagiri">Nilagiri</option>
                          <option value="Vellore">Vellore</option>
                          <option value="Villupuram">Villupuram</option>
                          <option value="Virudhunagar">Virudhunagar</option>
                        </select>
                        {/* <span className="text-danger">
                    {customers.cityError ? customers.cityError : ""}
                  </span> */}
                        {errors.city && (
                          <span className="text-danger">{errors.city}</span>
                        )}
                      </div>
                    </div>
                    {/* <div className="col">
                    <div className="mb-3">
                      <label htmlFor="State" className="form-table">
                        State{" "}
                      </label>

                      <select
                        id="productdetails"
                        value={customers.state}
                        name="state"
                        onChange={(e) => onInputChange(e)}
                        className={
                          "form-control " +
                          (customers.stateError ? "is-invalid" : "")
                        }
                      >
                        <option value="">Select</option>
                        <option value="8450" hidden>
                          Respect Senior Care Rider
                        </option>
                        <option value="TamilNadu">TamilNadu</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Andhra Pradhesh">Andhra Pradhesh</option>
                        <option value="Karnataka">Karnataka</option>
                      </select>
                      
                      {errors.state && (
                        <span className="text-danger">{errors.state}</span>
                      )}
                    </div>
                  </div> */}
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="Gender" className="form-table">
                          Gender
                        </label>
                        <select
                          id="productdetails"
                          value={customers.gender}
                          name="gender"
                          onChange={(e) => onInputChange(e)}
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
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="Salary" className="form-table">
                          Salary
                        </label>
                        <input
                          type={"number"}
                          className="form-control"
                          placeholder="Enter your salary"
                          name="salary"
                          value={customers.salary}
                          onChange={(e) => onInputChange(e)}
                        />{" "}
                        {errors.salary && (
                          <span className="text-danger">{errors.salary}</span>
                        )}
                      </div>
                    </div>
                    {/* <div className="col">
                    <div className="mb-3">
                      <label htmlFor="CreaditLimit" className="form-table">
                        CreaditLimit
                      </label>
                      <input
                        type={"number"}
                        className="form-control"
                        placeholder="Enter your Creadit Limit"
                        name="creaditLimit"
                        value={customers.creaditLimit}
                        onChange={(e) => onInputChange(e)}
                      />{" "}
                      {errors.creaditLimit && (
                        <span className="text-danger">
                          {errors.creaditLimit}
                        </span>
                      )}
                    </div>
                  </div> */}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <button
                      type="submit"
                      // onClick={(e) => onSubmit(e)}
                      className="btn btn-outline-primary "
                    >
                      Update
                      {/* onSubmit={(e) => onSubmit(e)}>  */}
                    </button>
                    {/* <button
                    type="clear"
                    className="btn btn-outline-danger mx-2 text-center"
                  >
                    Cancel
                  </button> */}
                  </div>
                </div>
              </div>
            </div>
            {/* // ) : (<p>no records matches</p> )} */}
          </form>
        {/* ) : (
          // ""
          <p className="text-danger text-center">no records matches</p>
        )} //karthi*/}
      </div>
    </div>
  );
  function validateFormUpdate() {
    let errors = {};
    // if (!customers.customerId.trim() === "") {
    //   errors.customerId = "Id is required";
    // } else if (customers.customerId === null) {
    //   errors.customerId = "Invalid Id";
    // } else if (!/^[A-Za-z0-9]+$/.test(fetch.customerId)) {
    //   errors.customerId = "Invalid characters in Customer ID";
    //   alert("id");
    // }

    if (customers.customerName === "") {
      errors.customerName = "Name is required";
    } else if (customers.customerName.length < 2) {
      errors.customerName = "Minimum 2 char";
    } else if (customers.customerName.length > 13) {
      errors.customerName = "Name is maximum 14 letters.";
    } else if (!customers.customerName.matchAll(".*\\d.*")) {
      errors.customerName = "Name is Does'n match";
    }
    if (customers.customerAge === "") {
      errors.customerAge = "Age is required";
    } else if (customers.customerAge < 18) {
      errors.customerAge = "Age is Above 18";
    } else if (customers.customerAge > 50) {
      errors.customerAge = "Age is Below 50";
    }
    if (customers.gender === "") {
      errors.gender = "gender is required";
    }
    if (customers.city === "") {
      errors.city = "City is required";
    }
    if (customers.salary === "") {
      errors.salary = "Salary is required";
    }
    if (customers.state === "") {
      errors.state = "State is required";
    }
    if (customers.creaditLimit) {
      errors.creaditLimit = "CreaditLimit is required";
    }
    const emailRegax = /^[a-zA-Z]+\d+@gmail\.com$/;
    if (customers.eMail === "") {
      errors.eMail = "Email is required";
      // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(customers.email)) {
      // ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$
    } else if (!emailRegax.test(customers.eMail)) {
      errors.eMail = "Invalid email address";
    }
    const phoneRegax = /^[0-9]{10}$/;
    if (customers.phoneNumber === "") {
      errors.phoneNumber = "Phone number is required";
      // } else if (!/^[0-9]{10}$/i.test(customers.phoneNumber)) {
    } else if (!phoneRegax.test(customers.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }

    return errors;
  }
}
