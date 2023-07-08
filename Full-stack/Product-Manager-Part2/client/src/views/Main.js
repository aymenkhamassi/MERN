import React, { useEffect, useState } from 'react'
import ListProduct from '../components/ListProduct';
import axios from 'axios';
    
const Main = (props) => {
    const [product, setProduct] = useState([]);
    
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
               
            })
            .catch(err => console.error(err));
    },[]);
    
    return (
        <div>
           {<ListProduct product={product}/>}
        </div>
    )
}
    
export default Main;

