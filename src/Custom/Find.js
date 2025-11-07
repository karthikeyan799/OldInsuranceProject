import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Find() {
  const [searchQuery, setSearchQuery] = useState("");
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    loadCustomers();
    //  if (searchQuery === '') {
    //     setFilteredCustomers([]);
    //     setError('');
    //     return;
    // }
  }, []);

  const loadCustomers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/fetchAllCustomer");
      setCustomers(result.data.listCustomer);
      setFilteredCustomers(result.data.listCustomer);
      console.log(result.data);
      console.log("by name");
    } catch (error) {
      console.error("Error loading customers:", error);
    }
  };

  const handleSearchClick = () => {
    // const filteredCustomers = customers.filter((customer) =>
    const filtered = customers.filter((customer) =>
      customer.customerName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredCustomers(filtered);
  };
  const FindByName = async () => {
   await axios
      .get(
        `http://localhost:8080/findByCustomerName?customerName=${searchQuery}`
      )
      .then((result) => {
      //   setFilteredCustomers(result.data.customized);
      // }).catch((e)=>{
      //   console.log(e)
      // })
        const data = result.data.customized;

        // const filtered = filteredCustomers.filter((customer) =>
        //   customer.customerName
        //     .toLowerCase()
        //     .includes(searchQuery.toLowerCase())
        // );

        // setFilteredCustomers(filtered);
        if (data === null) {
          // setError('Not found.error');
          console.log("value null");
          alert(searchQuery + " customerName is not found");
          setFilteredCustomers([]);
          loadCustomers();
        } else {
          setError("");
          setFilteredCustomers(data);
          alert(searchQuery + " fetched successfully");
        }

        // setFilteredCustomers(result.data.customized);
        console.log(result.data);
      })
      .catch((error) => {
        // setError('An error occurred while fetching data.');
        // setError('Not Found ')
        console.error(error);
        alert(searchQuery + " customerName is not found console");
        // setFilteredCustomers([]);
        // loadCustomers();

        // console.log("Error fetching customer name:", error);
      });
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  // const data=event.target.value;
  // if (data.length === 0) {
  //     setError('No customers found.');
  //     setFilteredCustomers([]);
  //   }
  //   else {
  //     setError('');
  //     setFilteredCustomers(data);
  //   }
  // };
  return (
    <div className="app bg-success">
      {/* <form onSubmit={FindByName}> */}
      {/* <form > */}
      <input
        type="search"
        placeholder="Search..."
        value={searchQuery}
        className="search"
        onChange={handleSearchChange}
        // onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* <button onClick={handleSearchClick}>Seach */}
      <button onClick={FindByName}>Seach</button>
      <button className="" type="reset">
        Reset
      </button>

      {/* {error && <p>{error}</p>} */}
      {/* {
    // filteredCustomers.length ===0 ? (
    //         <p>No karhi found.</p>
    //       ): */}
      {searchQuery ?
          
          // (<p>Not Found</p>     ):
           (
      <table>
        <thead>
          <tr>
            <th scope="row">ID</th>
            <th scope="row">Name</th>
            <th scope="row">Email</th>
          </tr>
        </thead>
        <tbody>
          {error && <p>{error}</p>}
          {
            // filteredCustomers.length === 0 ? (
            //       <p>No customers found.</p>
            //     ):filteredCustomers===null?(
            //        <p>Not Found</p>
            //      ):
            filteredCustomers
              //        .filter((customer) =>
              // customer.customerName.toLowerCase().includes(searchQuery.toLowerCase()))
              .map(customer => (
                // <tr key={customer.customerId}>
                <tr>
                  <td>{customer.customerId}</td>
                  <td key={customer.customerId}>{customer.customerName}</td>
                  <td>{customer.customerAge}</td>
                  <td>{customer.eMail}</td>
                </tr>
              ))
          }
          {/* {
        // (filteredCustomers.length === 0) ? (
        //     <p>No customers found.</p>
        //   ):(filteredCustomers==null)?(
        //      <p>Not Found</p>
        //    )}; */}
        </tbody>
      </table>)
     
         :  (<p>Not Found</p>     )
         }     
      {/* </form> */}
    </div>
  );
}
