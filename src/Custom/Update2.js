import React, { Component } from 'react'

export default class Update2 extends Component {
 constructor(props){
    super(props);
    this.state={
        customerId:"",
        customerName: "",
        customerAge: "",
        eMail: "",
        phoneNumber: "",
        city: "",
        state: "",
        salary: "",
        creaditLimit: "",
        gender: "",
    };
    this.handleChange=this.handleChange.bind(this);
    this.update=this.update.bind(this);
 }
 handleChange(event){
    const {name,value}=event.target;
    this.setState({[name]:value});
 }
 update(event){
    event.preventDefault();
    const update={
        customerId:this.state.customerId,
        customerName: this.state.customerName,
        customerAge:this.state.customerAge,
        eMail:this.state.eMail,
        phoneNumber:this.state.phoneNumber,
        city: this.state.city,
        state: this.state.state,
        salary: this.state.salary,
        creaditLimit: this.state.creaditLimit,
        gender: this.state.gender,
    };
   //  updateService(this.state.customerId,update)
    
    
    
 }
    render() {
    return (
      <div></div>
    )
  }
}
