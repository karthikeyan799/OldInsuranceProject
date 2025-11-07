import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default class FetchById2 extends Component {
    constructor(props){
        super(props);
        this.state={
            entites:[],
            selectedEntity:null,
            responseObject: [],
            customers: [],
            customerAll: [],
            result: false,
            postResult: false,
            postAllresult: false,
            getResult: false,
            postObjResult: false,
        };
    }
//   const { customerId } = useParams();
//   const [entites, setEntities] = useState([]);
//   const [selectedEntity, setSelectedEntity] = useState(null);
//   useEffect(() => {
    //     axios.get(`http://localhost:8080/fetchCustomerId`,customerId)
    //         .then(response => {
    //             setEntities(response.data.customer);
    //             console.log(response.data.customer);
    //             if (response.data.length > 0) {
    //                 setSelectedEntity(response.data[0]); // Select the first entity by default
    //             }
    //         })
    //         .catch(error => {
    //             console.error("Error fetching data:", error);
    //         });
//     loadCustomers();
//   }, []);
//   const loadCustomers = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/fetchCustomerId`,
//         customerId
//       );
      
//       setEntities(response.data.customer);
//       console.log(response.data.customer);
    // //   if (response.data.length > 0) {
    // //     setSelectedEntity(response.data[0]); // Select the first entity by default
    // //   }
    // } catch (error) {
//       console.error("Error loading customers:", error);
//     }
//   };
   handleEntitySelect = (entity) => {
    this.setState({selectedEntity:entity});
    
  };

  //  useEffect
//   componentDidMount(){
//     axios.get( `http://localhost:8080/fetchCustomerId`)
//     .then(response=>{
//         this.setState({
//             entites:response.data.customer,
//             selectedEntity:response.data.length> 0 ? response.data[0]:null
//         });
//     })
//     .catch(error=>{
//         console.error("Error fetching data:",error);
//     })
//   }
fetch(){
    this.fetch(`http://localhost:8080/fetchCustomerId`,{
        method:"GET",
        body:JSON.stringify({
            title:"New title added",
            body:"New body added , Hello body",
            customerId:1
        }),
        headers:{
            "Content-type":"application/json; chatset-UTF-8"
        }
    }
  
    ).then((res)=>res.json(),(error)=>console.log("Error",error))
    .then((data)=>{
        this.setState({customers:data.customer});
        this.setState({result:true});
        this.setState({getResult:true});
    })
    .catch((error) => console.log("Catch Error on Id", error))
      .finally(console.log(" Fetch By Id Finally.."));
  }

  render(){
    // const {entites,selectedEntity}=this.state;
   console.log(this.state.entites.customer);
   
  return (
    <div>
      {/* <ul>
        {this.state.entites.map((entity) => (
          <li
            key={entity.customerId}
            onClick={() => this.handleEntitySelect(entity)}
          >
           
          </li>
        ))}
      </ul> */}
      {/* //fetchById */}
      {this.state.getResult ? (
           <><div>
                  <h2>Selected Entity Details</h2>
                  <p>ID: {this.state.customers.customerId}</p>
                  {/* Render other properties */}
              </div><div className="table-responsive">
                      <table className="table table-hover table-striped table-bordered shadow mt-4 ">
                          <thead className="table-dark">
                              <tr>
                                  <th scope="col">CustomerId</th>
                                  <th scope="col">CustomerName</th>
                                  <th scope="col">CustomerAge</th>
                                  <th scope="col">E-Mail</th>
                                  <th scope="col">phone</th>
                                  <th scope="col">Address</th>
                                  <th scope="col">Salary</th>
                                  <th scope="col">CreaditLimit</th>
                                  <th scope="col">Gender</th>
                                  <th scope="col">Update</th>
                              </tr>
                          </thead>
                          <tbody className="table-primary">
                              {/* {fetch ? ( */}
                              <tr>
                                  {/* <th scope="row">{index + 1}</th> */}
                                  <td>{this.state.customers.customerId}</td>
                                  <td>{this.state.customers.customerName}</td>
                                  <td>{this.state.customers.customerAge}</td>
                                  <td>{this.state.customers.eMail}</td>
                                  <td>{this.state.customers.phoneNumber}</td>
                                  <td>{this.state.customers.state}</td>
                                  <td>{this.state.customers.city}</td>
                                  {/* <td>{customer.address}</td> */}
                                  <td>{this.state.customers.salary}</td>
                                  <td>{this.state.customers.creaditLimit}</td>
                                  <td>{this.state.customers.gender}</td>
                                  <td>
                                      <Link className="btn btn-outline-primary mx-2" to={`/update`}>
                                          Update
                                      </Link>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div></> 
        
      ) : " "
    //    (
    //     <p>No Records Selected</p>
    //   )
      }
      </div> 
  );
  
}
}
