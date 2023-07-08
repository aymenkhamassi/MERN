import React from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';



function App() {
  return (
    <div className="App">
     <ProductForm/>
     <hr/>
     <Main/>
      <Routes>
        <Route path='/product/:id' element ={<ProductDetail/>}/>
      </Routes>
      
  
    </div>
  );
}

export default App;
