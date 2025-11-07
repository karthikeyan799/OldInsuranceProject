import React, { Component, useEffect, useState } from "react";
import Log from "./Log";
import Registration from "./Registration";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile({fetch}) {
  // const[user,setUser]=useState({
  //   userId:'',
  //   userName:'',
  //   password:'',
  //   eMail:''
  // })
  // eslint-disable-next-line no-useless-constructor
  let {userName}=useParams();
 
  // useEffect(()=>{
  //   loadUser();
  // }, []);
  const loadUser = async () => {
    const result = await axios.post(
      `http://localhost:8080/save/{userName}`
     
      // register
      // `http://localhost:8080/updateCustomer?customerId=${customers.customerId}`,
      // customers
      
    )
    // setUser(result.data);
    // console.log(result.data);
  }
    return (
      <div style={{ padding: "70px" }} className="bg-success">
        {/* id:{fetch.userId} */}
        name:{fetch.userName}
        email:{fetch.eMail}
        password:{fetch.password}
        {/* <Registration eMail="karthi"></Registration> */}
      </div>
    );
  
}
