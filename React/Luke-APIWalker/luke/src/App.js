
import './App.css';
import {Route, Routes,} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Show from './components/Menu';

function App() {
  
  const [datatype, setDatatype] = useState("people")
  const [id, setId] = useState(0)

  const nav = useNavigate();

  const submitHandler = (e) =>{
        e.preventDefault();
        nav("/"+datatype+"/" + id)
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={submitHandler} >
          Search for: 
          <select name="datatype" id="datatype" onChange={(e)=>{setDatatype(e.target.value)}} value={datatype}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
          ID: <input onChange={(e)=>{setId(e.target.value)}} value={id} />
          <button>Search</button>
        </form>
      </div>
      <Routes>
      <Route path="/" element={ <h1>Welcome</h1> }/>
      <Route path="/ErrorNotFound" element={ <h1>These aren't the droids you're looking for</h1> }/>
      <Route path="/:datatype/:id" element={ <Show/> }/>
    </Routes>
    </div>
  );
}

export default App;