import './App.css';
import { useState } from  'react';

import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';
function App() {
  
    const [datas, setDatas] = useState(["","",""]);
    const [x,setX] = useState(1)
const setTab1 = (data) => {
  setDatas([data,datas[1],datas[2]])
  console.log(datas)
}
const setTab2 = (data) => {
  setDatas([datas[0],data,datas[2]])
  console.log(datas)
}
const setTab3 = (data) => {
  setDatas([datas[0],datas[1],data])
  console.log(datas)
}

const rendTab = () => {
  if (x === 1){return <Tab1 setTab1={setTab1} datas={datas}/> }
  else if (x === 2){return <Tab2 setTab2={setTab2} datas={datas}/> }
  else {return <Tab3 setTab3={setTab3} datas={datas}/> }
}

  return (
    <div className="App">
      <button onClick={()=>setX(1)}>Tab 1</button>
      <button onClick={()=>setX(2)}>Tab 2</button>
      <button onClick={()=>setX(3)}>Tab 3</button>
      <br />
      {rendTab()}
      
    </div>
  );
}

export default App;