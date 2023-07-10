import React from "react";
import {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css"

const Main = props =>{

    const [author, setAuthor] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/author")
        .then((serverResponse)=>{
            console.log(serverResponse.data);
            setAuthor(serverResponse.data)
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[])
    const updateAuthor = (id)=>{
        navigate("/author/edit/" +id)
    }
    const deleteAuthor = (id) =>{
        axios.delete("http://localhost:8000/api/author/"+id)
        .then((res)=>{
            
                setAuthor(author.filter((author)=>author._id !== id))
             
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err)
        })
    }


return(
    <div>
        <h1>Favorite authors</h1>
        <p><Link to={`/new`}>Add an author</Link></p>
        <p className="violet">We have quotes by :</p>
        <table className="table">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Action available</th>
                </tr>
            </thead>
            <tbody>
            {author.map((oneAuthor)=>{
                    return(
                        <tr key={oneAuthor._id}>
                            <td style={{color:"blueviolet"}}>{oneAuthor.author}</td>
                            
                            <td>
                            
                            <button onClick={() => updateAuthor(oneAuthor._id)} className="btn btn-success">Edit</button>
                            <button onClick={() => deleteAuthor(oneAuthor._id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
       
    </div>
)
            }
            

export default Main;