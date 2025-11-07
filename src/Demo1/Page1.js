import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
export default function Page1(){
 
   const [page,setpage]=useState({
        name:"",
        id:""
    })
 const navigate=useNavigate();
 const changetext=((event)=>{
    // history:cre
    setpage({[event.target.name]:event.target.value});
 })
 const goto=()=>{
    // const history=crea
    // const navigate=useNavigate('page2/'+this.state.id+'/'+this.state.name);
    // this.props.history.push('page2/'+this.state.id+'/'+this.state.name);
 }
//  subRouter=()=>{
//     this.props.history.push('page3/');
//  } 
    return (
      <div>Page1
        <input type='text' name='name' value={page.name} placeholder='name'onChange={changetext}/>
        <input type='text' name='id'value={page.id} placeholder='id'onChange={changetext}/>
        <input type='button' value='Go to page 2'onClick={ ()=>navigate('page2/'+page.id+'/'+page.name)}/>
        <input type='button' value='Search'/>

      </div>
    )
  }
 
