import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import {useParams, useNavigate} from "react-router-dom"

const Update = (props) => {
const {id} = useParams();
const nav = useNavigate();
    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [episodes, setEpisodes] = useState(0)

    useEffect(()=>{
        // go to the server and bring the show from DB
        axios.get("http://localhost:8000/api/shows/"+id)
        .then((res)=>{
            // console.log(res.data.Show);
            setTitle(res.data.Show.title)
            setGenre(res.data.Show.genre)
            setEpisodes(res.data.Show.episodes)
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[id])

   const handleForm = (e) =>{
    e.preventDefault();
    
    // console.log(title, genre, episodes);
    const updatedShow = {
        title,
        genre,
        episodes
    }
    
    // send it to the server
    
    axios.put("http://localhost:8000/api/shows/"+id, updatedShow)
    .then((response)=>{
        console.log(response.data);
        nav("/")
    })
    .catch((err)=>{
        console.log("❌❌❌ Something Went Wrong", err);
    })
   }    

  return (
    <div>
        <h2>Edit Show</h2>
        {/* update form */}
        <form onSubmit={handleForm}>
            Title: <input onChange={(e)=>{setTitle(e.target.value)}} value={title}/> <br />
           Genre: <input  onChange={(e)=>{setGenre(e.target.value)}}value={genre}/> <br />
            Episodes: <input type="number" onChange={(e)=>{setEpisodes(e.target.value)}} value={episodes}/> <br />
            <button>Update</button>
        </form>
    </div>
  )
}

export default Update