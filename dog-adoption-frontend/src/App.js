import React, {useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import Singledog from "./components/singledog"
import Alldogs from "./components/alldogs"
function App() {
  const [singledog, setSingledog] = useState({});
  // setSingledog ("helloword");
  // console.log(singledog)
  return (
    <div className="App">
      <Router> 
      <Navbar />
      <Routes >
        <Route exact path= "/" element= { <Homepage />}/>
        <Route exact path= "/singledog" element= { <Singledog singledog={singledog}/>}/> 
        <Route exact path= "/alldogs" element= { <Alldogs setSingledog= {setSingledog}/>}/> 
      </Routes>

      </Router>
   
    </div>
  );
}

export default App;
