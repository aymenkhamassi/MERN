import React ,{useState}from "react";
import axios from 'axios';


export default (props) =>{
    const[title,setTitle]=useState("");
    const[price,setPrice]=useState(1);
    const[description,setDescription]=useState("");


    const handelSubmit = e =>{
        e.preventDefault()

        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
  

    return(
        <form onSubmit={handelSubmit}>
            <p>
            <label>Title : </label>
            <input onChange = { e => setTitle(e.target.value)}/>
            </p>
            <p>
            <label>Price : </label>
            <input type ="Number" onChange={ e => setPrice(e.target.value)}/>
            </p>
            <p>
            <label>Description : </label>
            <input onChange = { e => setDescription(e.target.value)}/>
            </p>
            <button>Add</button>
            
        </form>
    )
}

