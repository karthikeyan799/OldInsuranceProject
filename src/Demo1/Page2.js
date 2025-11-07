import React, { Component } from 'react'
import { useParams } from 'react-router-dom';

export default function Page2() {
 
    // var params=this.props.match.params;
    let {id,name}=useParams();
    return (
      <div>Welcome to page 2
         <p>ID:{id}</p>
         <p>Name:{name}</p>
      </div>
    )
  }
 
