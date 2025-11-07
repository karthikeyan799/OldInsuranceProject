import React, { Component } from "react";
import { useParams } from "react-router-dom";

export default function Dashboard2() {
   let {userName}=useParams();
    
    return (
      <div style={{ textAlign: "center", padding: "100px" }}>
      <h1 style={{color:"white"}} className="welcome">   Welcome  :  {userName}</h1>
      </div>
    );
   
}
