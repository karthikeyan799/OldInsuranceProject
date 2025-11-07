import React from 'react'
import { Nav } from 'react-bootstrap'
import {
    Link,
    //  NavLink, Route, Router,cmd
    Routes
} from 'react-router-dom'
import Add2 from './Add2'
import Update from './Update'

export default function Customer() {
    const details = [
        <ul>
            <li>
                <Link to="/customer/:add2">Add</Link></li>
            <li>
                <Link to={"/customer/update"} >Update</Link></li>
            <Nav>FetchById</Nav>
            <Nav>fetchAll2</Nav></ul>
    ]
    return (
        <div className='container-fluid bg-warning mt-4'>
            <div>
                {details.forEach}
                {/* <Router> */}
                <div className='col' style={{ float: "left", height: "90vh", paddingLeft: "5%", backgroundColor: "" }}>
                    {/* <Nav> */}
                    {/* <ul>
                    <li>
                <Link  to="/customer/:add2">Add</Link></li>
                <li>
                <Link to={"/customer/update"} >Update</Link></li>
                <Nav>FetchById</Nav>
                <Nav>fetchAll2</Nav></ul> */}
                    {/* {details.map((link, i) => {
                        <li key={i}>{link}
                        </li>
                    })}cmd */}
                    {/* </Nav> */}
                </div>
                <div>
                    <Routes path='/customer/:add2' Component={Add2} />
                    {/* <Route path='/customer/:add2'Component={Add2}/> */}
                    {/* <Route */}
                    <Routes path='/customer/update' Component={Update} />
                </div>
                {/* </Router> */}
            </div>
        </div>
    )
}
