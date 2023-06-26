import './App.css';
import {useState} from "react";

function App() {

  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            
            return response.json();
        }).then(response => {

            setPokemons(response.results);
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