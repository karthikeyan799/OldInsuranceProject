import React, { Component } from 'react'

export default class RestController extends Component {
    constructor(){
        super();
        this.state={
            responseData: [],
            customer: [],
            customerAll: [],
            result: false,
            postResult: false,
            postAllResult: false,
            getResult:false,
            postObjResult:false
        }
        this.clickId=this.fetchByData.bind(this);
        this.clickAll=this.fetchAllData.bind(this);
        this.clickPost=this.fetchAllPost.bind(this);
        // this.clickAdd=this.clickAdd.bind(this);
        // this.clickUpdate=this.getObjUpdate.bind(this);
     
     }
        render() {
            var headerMessage="";
            if(this.state.result){
                headerMessage="RESPONSE DATA";
            }
    console.log(this.state.userAll);
           console.log(this.state.responseData);
            
        return (
          <div>
            <button onClick={this.clickAdd}>Add</button>&nbsp;
            <button onClick={this.getObjUpdate}>Update</button>&nbsp;
            <button onClick={this.clickId}>Fetch By Id</button>&nbsp;
            <button onClick={this.clickAll}>Fetch All</button>&nbsp;
            <button onClick={this.clickPost}>FetchPost</button>;
            <div><p>{headerMessage}</p></div><br/>
            {
              (this.state.postResult)?(<div>
                <p>user Title:{this.state.customer}</p>
                <p>User Id:{this.state.customer}</p>
              </div>):""
            }
            {//fetchAll
              this.state.customerAll.map((customer,i)=>
              <div key={i}>
                <p>customer name:{customer}</p>
                <p>Age:{customer}</p>
              </div>)
            }
          </div>
          
        )
      }
      
      fetchAllData(){
        fetch('http://localhost:8080/fetchAllCustomer')
        .then(res=>res.json(),(error)=>console.log("Error",error))
        .then((data)=>{
          this.setState({responseData:data});
          this.setState({result:true});
          this.setState({getResult:true});
        },(error)=>console.log("Error",error))
        .catch(error=>console.log("Catch Error",error))
        .finally(console.log("finnaly"))
      }
      fetchByData(){
        fetch('http://localhost:8080/fetchCustomerId'
        ,{
          method:'GET',
          body:JSON.stringify({
            title:'new title added',
             customerId:2
          }),
          headers:{
            "Content-type":"application/json; charset-UTF-8"
          }
        }
        ).then(res=>res.json(),(error)=>console.log("Error",error))
        .then((data)=>{
          this.setState({customer:data});
          this.setState({result:true});
          this.setState({postResult:true});
        })
        .catch(console.log)
      }
       fetchAllPost(){
        fetch('http://localhost:8080/fetchAllCustomer',{
          method:'GET',
          body:"esh",
          headers:{
            "Content-type":"application/text; charset=UTF-8"
          }
        })
        .then(res=>res.json())
        .then((data)=>{
          this.setState({responseData:data});
          this.setState({result:true});
          this.setState({postAllResult:true});
        })
        .catch(console.log)
      }
     
    }