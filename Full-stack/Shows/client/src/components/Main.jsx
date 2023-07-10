import "bootstrap/dist/css/bootstrap.css"
import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const Main = (props) => {
    const [shows, setShows] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/shows")
        .then((serverResponse)=>{
            console.log(serverResponse.data);
            setShows(serverResponse.data)
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[])

    // delete function
    const deleteShow = (id) =>{
        axios.delete("http://localhost:8000/api/shows/"+id)
        .then((res)=>{
            // TODO !!
            // shows.filter((oneShow)=>{
            //     return setShows((oneShow._id !== id))
            // })
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err)
        })
    }
  return (
    <div>
        <h2>Shows List</h2>

        {/* {JSON.stringify(shows)} */}

        <table className='table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th># of Episodes</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {shows.map((oneShow)=>{
                    return(
                        <tr key={oneShow._id}>
                            <td><Link to={`shows/${oneShow._id}`}>{oneShow.title}</Link></td>
                            <td>{oneShow.genre}</td>
                            <td>{oneShow.episodes}</td>
                            <td>
                            <Link to={`shows/edit/${oneShow._id}`} > edit </Link>
                            <button onClick={() => deleteShow(oneShow._id)}>delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Main