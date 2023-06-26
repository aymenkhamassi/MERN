
import './App.css';
import {useState} from "react";
import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    
          .then(response => {
            console.log(response.data.results);
            setPokemons(response.data.results);
        }).catch(err=>{
            console.log(err);
        });
  }

  

  return (
    <div className="App">
      <button onClick={fetchPokemons} >Fetch Pokemons</button> <br />
      <ul>
      {pokemons.map((pokemon)=>{
        return( <li>{pokemon.name}</li> )
      })}
      </ul>
    </div>
  );
}

export default App;