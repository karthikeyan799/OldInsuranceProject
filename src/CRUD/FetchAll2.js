// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// export default class FetchAll2 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       responseObject: [],
//       customers: [],
//       customerAll: [],
//       result: false,
//       postResult: false,
//       postAllresult: false,
//       getResult: false,
//       postObjResult: false,
//     };
//     this.clickMe = this.fetchAll.bind(this);
//     this.clickme=this.fetchById.bind(this);
//   }
//   render() {
//     var headerMessage = "";
//     if (this.result) {
//       headerMessage = "RESPONSIVE PAGE";
//     }
//     // console.log(this.state.customerAll);
//     // console.log(this.state.responseObject);
//     console.log(this.state.customers);
//     return (
//       <div>
//         <Link onClick={this.clickMe}>GetAll</Link>
//         <Link onClick={this.clickme}>FetchById</Link>
//       <div>{headerMessage}</div>
        
//         {
//             (this.state.getResult)?(
//                 <div>
                 
//                     <p>id:{this.state.customers.customerId}</p>
//                 </div> 
//             ):(<p>not select</p>)
//         }
//         {
//             this.state.responseObject.map((custom,i)=>
//             <div key={i}>
//                 <p> name: {custom.customerName}</p>
//                 <p>age : {custom.customerAge}</p>
//             </div>)
//         }
//       </div>
//     );
//   }
//   fetchAll() {
//     fetch("http://localhost:8080/fetchAllCustomer")
//       .then(
//         (res) => res.json(),
//         (error) => console.log("Error", error)
//       )
//       .then(
//         (data) => {
//           this.setState({ responseObject: data.listCustomer});
//           this.setState({ result: true });
//           this.setState({ postResult: true });
//         },
//         (error) => console.log("Error: ", error)
//       )
//       .catch((error) => console.log("Catch Error ", error))
//       .finally(console.log("Finally.."));
//   }
//   fetchById(){
  
//         fetch("http://localhost:8080/fetchCustomerId",{
//         method:"GET",
//         body:JSON.stringify({
//             // title:"New title added",
//             body:"New body added , Hello body",
//            customerId:1
//         }),
//         headers:{
//             "Content-type":"application/json; chatset-UTF-8"
//         }
//     }
  
//     ).then((res)=>res.json(),(error)=>console.log("Error",error))
//     .then((data)=>{
//         this.setState({customers:data});
//         this.setState({result:true});
//         this.setState({getResult:true.customer});
//     })
//     .catch((error) => console.log("Catch Error on Id", error))
//       .finally(console.log(" Fetch By Id Finally.."));
//   }
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function FetchAll2() {
  const [foodItemDetails, setFoods] = useState([]);
  const[value, setValue]=useState("");

  useEffect(() => {
    loadFoods();
  }, []);

  const loadFoods = async () => {
    try {
      // const result = await axios.get(
      //   "http://localhost:8080/Food/fetchAllFoods"
      // );
      const result = await axios.get("http://localhost:8080/fetchAllCustomer");
      setFoods(result.data.listCustomer);
      console.log(result.data);
    } catch (error) {
      console.error("Error loading foods: ", error);
    }
  };
  const handleReset = () => {
    loadFoods();
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    // return await axios.get(`http://localhost:8080/Food/fetchById/${id}`)
    return await axios
    // .get(`http://localhost:8080/Food/fetchById?id=${value}`)
    // return await axios
    .get(`http://localhost:8080/fetchCustomerId?customerId=${value}`)
   
    .then((response) =>{
      //  setFoods(response.foodItemDetails);
      setFoods(response.data.customer);
       setValue("");
      })
    .catch((err) => console.log(err));
  };
  return (
        <div className="container">

          <form style={{
            margin: "auto",
            padding:"15px",
            maxWidth:"400px",
            alignContent:"center",
          }}
          className="d-flex input-group w-auto"
          onSubmit={handleSearch}>
            <input
            type="text"
            className="form-control"
            placeholder="Search Id..."
            value={value}
            onChange={(e) => setValue(e.target.value)} 
            />
            <button type="submit" className ="btn btn-outline-success">Search</button>
            <button  className="btn btn-outline-danger mx-2" onClick={() => handleReset()}>Reset</button>
          </form>
            <div className='py-4'>
            <h2 className="text-center">Food Details</h2>
            <table className="table border shadow">
      <thead>
        
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Food Name</th>
          <th scope="col">Serving Size</th>
          <th scope="col">Calories</th>
          <th scope="col">Carbs</th>
          <th scope="col">Proteins</th>
          <th scope="col">Fats</th>
          <th scope="col">Action</th>
        </tr>
       
      </thead>
      <tbody>
        {/* {(value) ?(
          <tr>
          <th >{foodItemDetails.customerId}</th>
          <td>{foodItemDetails.customerName}</td>
          </tr>
        )}: */}
        {value ?(
          <p>no</p>
        ):(
            foodItemDetails.map((foodInfo,index)=>(

                <tr>
          <th scope="row" key={index}>{foodInfo.customerId}</th>
          <td key={foodInfo.customerId}>{foodInfo.customerName}</td>
          <td>{foodInfo.size}</td>
          <td>{foodInfo.calories}</td>
          <td>{foodInfo.carbs}</td>
        <td>{foodInfo.proteins}</td>
        <td>{foodInfo.fat}</td>
        <td>
          <Link className="btn btn-outline-primary mx-2"
          to={`/editfood/${foodInfo.id}`}>Edit</Link>
          <Link className="btn btn-outline-primary mx-2"  to="/viewfood">View</Link>
        </td>
        </tr>
            ))
        )}

      </tbody>
    </table>
            </div>
        </div>
   
  );
}
