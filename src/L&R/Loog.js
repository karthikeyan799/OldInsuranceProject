import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Loog() {
 
 const [userName,setUserName]=useState('');
 const [password,setPassword]=useState('');
 const [userNameError,setUserNameError]=useState('');
 const [passwordError,setPasswordError]=useState('');
 const [error,setError]=useState('');
//  const navigate=useNavigate();

 const validateUserName=(userName)=>{
    return userName.trim()!=='';

 }
 const validatePassword=(password)=>{
    return password.length>=6;
    
 }
 const handleSubmit=async(event)=>{
    event.preventDefault();

    const isUserNameValid=validateUserName(userName);
    const isPasswordValid=validatePassword(password);

    if(!userName&&!password){
        setError('Please enter your username and password');
        return;
    }

    if(!isUserNameValid){
        setUserNameError('Please enter a valid username');
        return;
    }

    if(!isPasswordValid){
        setPasswordError('Please must be at least 6 characters');
        return;
    }

    // try{
    //     // const data;
    // }catch(error){
    //     console.log(error);
    // }
//     try {
//         const result = await axios.get(
//           `http://localhost:8080/login/${userName}`
//         );
//         setCustomers(result.data.customized);
//         console.log(result.data.customized);
//       } catch (error) {
//         console.error("Error fetching customer name:", error);
//       }
//  }};

    return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border'>Login Form
        <div className='text-danger'>
            {error&&error}
            </div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {/* <div className={`mb-3 ${userNameError ? 'has-error':''}`}>
                    <label htmlFor='userName'>
                        <strong>UserName</strong>
                    </label>
                    <input type='text'
                    placeholder='Enter UserName'
                    name='userName'
                    value={userName}
                    onChange={e=>{
                        setUserName(e.target.value);
                        setUserNameError('');
                    }}
                    // className={`form-control rounded-0 ${userNameError ? 'is-invalid':''}`}
                    // autoComplete='off'/>
                    // {userNameError && <div className='text-danger'>
                    //     {userNameError}</div>}
                    // <div className={`mb-3 ${passwordError? 'has-error':''}`}>
                    //     <label htmlFor='password'><strong>Password</strong></label>
                    //     <input type="password"
                    //     placeholder="Enter Password"
                    //     name='password'
                    //     value={password}
                    //     onChange={e=>{
                    //         setPassword(e.target.value);
                    //         setPasswordError('');
                    //     }}
                    //     className={`form-control rounded-0 ${passwordError? 'is-invalid':''}`}
                    //     />
                    //     {passwordError&&<div className='text-danger'>{passwordError}</div>}

                    // </div>
                    // <button type='submit'
                    // className='btn btn-success w-100 rounded-0'>
                        Login
                        // </button>
                // </div> */}
                </form></div></div>
  )
}
}