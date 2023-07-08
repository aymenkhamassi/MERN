import React ,{useState}from "react";
import axios from 'axios';


const Form = (props) =>{
    const[title,setTitle]=useState("");
    const[price,setPrice]=useState("");
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
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={handelSubmit}>
            <p>
            <label>Title : </label>
            <input onChange = { e => setTitle(e.target.value)}/>
            </p>
            <p>
            <label>Price : </label>
            <input onChange={ e => setPrice(e.target.value)}/>
            </p>
            <p>
            <label>Description : </label>
            <input onChange = { e => setDescription(e.target.value)}/>
            </p>
            <button>Add</button>
            
        </form>
        </div>
        
    )
}

export default Form;
