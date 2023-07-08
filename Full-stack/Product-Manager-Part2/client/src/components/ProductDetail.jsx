import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import {useParams } from 'react-router-dom';

const ProductDetail = (props) => {

    const[product,setProduct] = useState({});
    const {id}=useParams();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product/"+id)
        .then((serverResponse)=>{
            console.log(serverResponse);
            setProduct(serverResponse.data.Product);
        })

        
        .catch((err)=>{
            console.log(err)
        })

    },[id])
    
  return (
    <div>
        <ul>
            <li>{product.title}</li>
            <li>{product.price}</li>
            <li>{product.description}</li>
        </ul>
       
    </div>
  )
}

export default ProductDetail