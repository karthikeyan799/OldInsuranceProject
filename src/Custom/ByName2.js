import React, { Component } from 'react'

export default class ByName2 extends Component {
 constructor(){
    super();
    this.state={
        customers:[],
        searchName:'',
        filteredCustomer:[],
    };
 }
 componentDidMount(){

 }
 findName=()=>{
    const{customers,searchName}=this.state;
    const filteredCustomer=customers.filter(customer=>
        customer.customerName.toLowerCase().includes(searchName.toLocaleLowerCase()));
      this.setState({filteredCustomer});  
 };
 handleInput=event=>{
   //  this.setState({searchName})
 }
    render() {
    return (
      <div>ByName2</div>
    )
  }
}
