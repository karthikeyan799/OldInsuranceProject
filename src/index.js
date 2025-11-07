import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import reportWebVitals from './reportWebVitals';
import HomeHeader from './Project/HomeHeader';
// const root =ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Header/>
//   </React.StrictMode>
// );
// ReactDOM.render(
//   <Simple/>,
//   document.getElementById('root')
// );
// ReactDOM.render(
//       <React.StrictMode>
//         <Customer/>
//       </React.StrictMode>,
//     document.getElementById('root')
//     );

// ReactDOM.render(
//     <React.StrictMode>
//       {/* <Find/> */}
      
//     </React.StrictMode>,
//   document.getElementById('root')
//   );

// /* Project Home Page */
ReactDOM.render(
    <React.StrictMode>
      <HomeHeader/>
       {/* <Project/> */}
       {/* <Update/> */}
    </React.StrictMode>,
     document.getElementById('root')
    );  

  // ReactDOM.render(
  //   <React.StrictMode>
  //    <AddPolicy/>
  //  {/* <App/> */}
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );
 /*Login */
  // ReactDOM.render(
  //   <React.StrictMode>
  //     <Page/>
  //   </React.StrictMode>,
  // document.getElementById('root')
  // );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
