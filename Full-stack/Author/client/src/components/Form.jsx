import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import axios from 'axios';


const Form = props =>{
    const[author,setAuthor] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([])
    const [errorObject, setErrorObject] = useState({})
    
    const handelSubmit = e =>{
        e.preventDefault()

        axios.post('http://localhost:8000/api/author', {
          author
        })
            .then(res=>{
                console.log(res)
                navigate("/")
            })
            //.catch(err=>{console.log(err)
            .catch((err) => {
                console.log(err)
                console.log(err.response.data)
                setErrorObject(err.response.data.errors)
                // const errorResponse = err.response.data.errors
                const errorArr =[]
                 for (const key of Object.keys(err.response.data.errors)) {
                  errorArr.push(err.response.data.errors[key].message)
                 }
                console.log("==============",errorArr)
                setErrors(errorArr)
            })
                
               
    
    }
    
  

    return(
        <div>
             <h1>Favorite authors</h1>
             <p><Link to={`/`}>Home</Link></p>
             <p className="violet">Add a new author :</p>
        <form onSubmit={handelSubmit}>
            <p>
            <label>Name : </label>
            <input  onChange = { e => setAuthor(e.target.value)}/>
            </p>
            {errorObject.author?<p className='text-danger'>{errorObject.author.message}</p>:""}
        
            <button className="btn btn-success">Submit</button>
            <button onClick={()=>{navigate("/")}} className="btn btn-primary">Cancel</button>
            
            
           
            
            
        </form>
       
        </div>
       
    )
}


export default Form;