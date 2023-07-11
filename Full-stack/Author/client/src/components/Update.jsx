import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import {useParams, useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";



const Update = (props) => {
const {id} = useParams();
const nav = useNavigate();
    const [author, setAuthor] = useState("")
    const [errors, setErrors] = useState([])
   
    

    useEffect(()=>{
        
        axios.get("http://localhost:8000/api/author/"+id)
        .then((res)=>{
            
            setAuthor(res.data.Author.author)
          
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[id])

   const handleForm = (e) =>{
    e.preventDefault();
    
    const updatedAuthor = {
       author
    }
    
    // send it to the server
    
    axios.put("http://localhost:8000/api/author/"+id, updatedAuthor)
    .then((response)=>{
        console.log(response.data);
        nav("/")
    })
    // .catch((err)=>{
    //     console.log("❌❌❌ Something Went Wrong", err);
    // })
    .catch((err) => {
        console.log(err.response.data.error.errors)
        const errResponse = err.response.data.error.errors;
        const errObj = [];
        for (const key of Object.keys(errResponse)) {
            errObj.push(err.response.data.error.errors[key].message)
        }
        setErrors(errObj);
      });
   }    

  return (
    <div>
        <h1>Favorite authors</h1>
        <p><Link to={`/`}>Home</Link></p>
        <p className='violet'>Edit this author</p>
        
        <form onSubmit={handleForm}>
            <label>Name:</label>
            <input onChange={(e)=>{setAuthor(e.target.value)}} value={author}/> <br />
            {errors.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>)}
        
            <button className='btn btn-success'>Submit</button>
            <button onClick={()=>{nav("/")}} className="btn btn-primary">Cancel</button>
        </form>
    </div>
  )
}

export default Update