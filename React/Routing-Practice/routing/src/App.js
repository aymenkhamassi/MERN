import React from "react";
import './App.css';
import {Routes,Route } from "react-router-dom";
import { useParams } from "react-router-dom";
  
  
 
const Home = (props) => {
  return (
    <div>
      <h1>Welcome</h1> 
    </div>
     
  );
};
const Input = (props) => {
  const {id} = useParams();
  return (
    <div>
      {isNaN(+id) ? <h1>The Word is : {id}</h1> : <h1>The Number is : {id}</h1>}
    </div>

  );
  
};
const Colors = (props) => {
  const {id,color,bgcolor} = useParams();
  const myStyle = {
    color: color,
    backgroundColor: bgcolor,
  };
  return (
    <div>
      <h1 style={myStyle}>The word is : {id} </h1>
    </div>

  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<Input />} />
        <Route path="/:id/:color/:bgcolor" element={<Colors />} />
      </Routes>
    </div>
  );
}
    
export default App

