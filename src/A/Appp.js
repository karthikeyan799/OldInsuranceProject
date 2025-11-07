import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AuthNavbar from './AuthNavbar';

import LoginNavbar from './LoginNavbar';
import Add2 from '../CRUD/Add2';
function Appp() {
  // const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" render={() => <LoginNavbar />} />
        <Route exact path="/" Component={AuthNavbar} />
        <Route path="/add2" render={() => <AuthNavbar />} />
        <Route path="/add" Component={() => <Add2 />} />
        <Route path="/update" render={() => <AuthNavbar />} />
        <Route path="/fetchAll" render={() => <AuthNavbar />} />

        {/* <Route path="/login" component={Login} />
      <Route path="/" exact component={Homee} />
      <Route path="/add2" component={Add2} />
            <Route path="/add" component={Add} />
            <Route path="/update" component={Update} />
            <Route path="/fetchAll" component={FetchAll} />
       */}

      </Routes>
    </Router>
  );
}

export default Appp;
