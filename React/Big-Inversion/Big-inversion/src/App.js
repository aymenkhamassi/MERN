import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

const data =[
  {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
  {"firstName":"John", "lastName":"Smith","age":88,"hairColor":"Brown"},
  {"firstName":"Millard", "lastName":"Fillmore","age":50,"hairColor":"Brown"},
  {"firstName":"Maria", "lastName":"Smith","age":62,"hairColor":"Brown"}
]
function App() {
  return (
    <div className="App">
      {data.map( function(perso, i){
        return <PersonCard firstName={perso.firstName} lastName={perso.lastName} age={perso.age} hairColor={perso.hairColor}/>
      })}
    </div>
  );
}

export default App;

