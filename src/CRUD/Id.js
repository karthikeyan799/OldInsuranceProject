import React from 'react'
// import { Link } from 'react-router-dom';cmd

export default function  Id() {
    var fetch=true;
        
    
  return (
    <div className='conatiner-fluid bg-secondary'>
        <div className='row'>
            <div className='table mt-2 bg-success'>
                <h1 className='text-center'>Fetch By Id</h1>
                <div className='d-flex' role='search' style={{ justifyContent: "center", }}
        >
            <div className='inputGroupCotainer'>
                <div className='input-group'> 
                    <input className='form-control'
                    type='number'
                    placeholder='FindById...'
                    aria-label='Search'
                    />
                    <span className='input-group-text'>
                        <i className='fa fa-search'></i>
                    </span>
                    </div>
                    
                    </div></div></div>
                    
        {fetch ? (
          <div className="table-responsive">
            <table className="table table-hover table-striped table-bordered shadow mt-4 ">
              <thead className="table-dark">
                <tr>
                  <th scope="col">CustomerId</th>
                  <th scope="col">CustomerName</th>
                  <th scope="col">Age</th>
                  <th scope="col">E-Mail</th>
                  <th scope="col">phone</th>
                  <th scope="col">State</th>
                  <th scope="col">City</th>
                  <th scope="col">Salary</th>
                  <th scope="col">CreaditLimit</th>
                  <th scope="col">Gender</th>
                  {/* <th scope="col">Update</th> */}
                </tr>
              </thead>
              <tbody className="table-primary"> 
                {/* {fetch ? ( */}
                <tr>
                  {/* <th scope="row">{index + 1}</th> */}
                  <td>{fetch.customerId}</td>
                  <td>{fetch.customerName}</td>
                  <td>{fetch.customerAge}</td>
                  <td>{fetch.eMail}</td>
                  <td>{fetch.phoneNumber}</td>
                  <td>{fetch.state}</td>
                  <td>{fetch.city}</td>
                  <td>{fetch.salary}</td>
                  <td>{fetch.creaditLimit}</td>
                  <td>{fetch.gender}</td>
                  <td>
                    {/* <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/update`}
                    >
                      Update
                    </Link> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) :
        (
          <p>No Records Selected</p>
        )}
      </div></div>
  )
}
