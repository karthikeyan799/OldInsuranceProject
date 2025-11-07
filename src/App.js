import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./CRUD/Home";
// import { Login } from "@mui/icons-material";
import HomeHeader from "./Project/HomeHeader";
import Registration from "./CRUD/Registration";
import Login from "./CRUD/Login";
import FetchAll from "./CRUD/FetchAll";
import Log from "./CRUD/Log";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route  path="/home" Component={Home} />
          <Route exact path="/" Component={Login} />
          <Route path="/fetchAll" Component={FetchAll} />

          <Route  path="/homeNavbar2" Component={HomeHeader} />
          {/* //homeNavbar2 */}
          <Route  path="/registration" Component={Registration} />
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
