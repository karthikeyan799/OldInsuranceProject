import React, { useState } from 'react'

export default function Login2() {
let errors={};
  return(
  <div>
    <label htmlFor="email">Email</label>
<input
  id="email"
  name="email"
  type="text"
  placeholder="Enter your email"
  value={values.email}
  onChange={handleChange}
  onBlur={handleBlur}
  className={errors.email && touched.email && "error"}
/>
{errors.email && touched.email && (
  <div className="input-feedback">{errors.email}</div>
)}
<label htmlFor="password">Password</label>
<input
  id="password"
  name="password"
  type="password"
  placeholder="Enter your password"
  value={values.password}
  onChange={handleChange}
  onBlur={handleBlur}
  className={errors.password && touched.password && "error"}
/>
{errors.password && touched.password && (
  <div className="input-feedback">{errors.password}</div>
)}
<button type="submit" disabled={isSubmitting}>
  Login
</button>
  </div>
)
}
//     const[customer,setcustomer]=useState({
//         customerName:"",
//         customerAge:"",
//         email:"",
//         phone:"",
//         address:"",
//         city:"",
//         state:"",
//         salary:"",
//         creaditLimit:"",
//         gender:""
//       });
//       const {customerName,customerAge,email,phone,address,city,state
//     ,salary,creaditLimit,gender}=customer;
    
//     const onInputChange=(e)=>{
//         setcustomer({...customer,[e.target.customerName]:e.target.value});
//     };
//   return (
//     <div> <div className="conatainer ">
//     <div className="row ">
//       <div className="col-md-6 offset-md-3 bg-warning border rounder p-4 mt-2 shadow">
//         <h2 className="text-center m-4"> Register</h2>
//         <div className="mb-3">
//           <label htmlFor="Name" className="form-table">customer Name</label>
//           <input
//             type={"text"}
//             className="form-control"
//             placeholder="Enter your name"
//             name="customerName"
//             value={customerName}
//             onChange={(e)=>onInputChange(e)}
//           ></input>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="Name" className="form-table">Password</label>
//           <input
//             type={"text"}
//             className="form-control"
//             placeholder="Enter your name"
//             name="customerAge"
//             value={customerAge}
//           ></input>
//         </div>
//         <div style={{ textAlign: "center" }}>
//           <button type="submit" className="btn btn-outline-primary ">Submit
//           </button>
//           <button type="clear" className="btn btn-outline-danger mx-2 text-center">Cancel
//           </button></div>
//       </div>
//     </div>
//   </div></div>
//   )
// }
