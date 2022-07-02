import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import {Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Components/Login"
import MovieDetail from "./Components/MovieDetail"

import BookingDetail  from './Components/BookingDetail';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Home/>}></Route>
        
        <Route path = "/MovieDetail/:id" element={<MovieDetail/>}></Route>
        <Route path = "/BookingDetail" element={<BookingDetail/>}></Route>
        <Route path = "/Login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
