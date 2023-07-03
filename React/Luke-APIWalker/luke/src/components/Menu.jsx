import React from 'react'
import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'

function Show() {
    const [data, setData] = useState(0);
    const {id,datatype} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${datatype}/${id}/`)
        .then((apiResponse)=>{
            console.log(apiResponse.data);
            setData(apiResponse.data)
        })
        .catch((err)=>{
            navigate("/ErrorNotFound", {replace:true})
        })
    },[id,datatype])
  return (
    <div>
        <h1>{data.name}</h1>
        {datatype === "planets" ? <><p>Climate: {data.climate}</p><p>Terrain: {data.terrain}</p><p>Surface Water: {data.surface_water}</p><p>Population: {data.population}</p></> : ""}
        {datatype === "people" ? <><p>Height: {data.height}</p><p>Mass: {data.mass}</p><p>Hair Color: {data.hair_color}</p><p>Skin Color: {data.skin_color}</p></> : ""}
    </div>
  )
}

export default Show