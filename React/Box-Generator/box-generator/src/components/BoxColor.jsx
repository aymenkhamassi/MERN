import React, { useState } from 'react'

const BoxColor = (props) => {
    const[colorname,setColor] = useState("");
    const[boxes,setBoxes] = useState([]);


    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    const handleChange = (e) => {
        setColor(e.target.value);
        
    };

    const handleAddBox = () =>{
        if(colorname){
            setBoxes([...boxes,colorname]);
            setColor('');
        }
    }

    






  return (
    <form onSubmit={handleSubmit}>
        <label>Color : </label>
        <input type="text" value={colorname} onChange={handleChange} />
        <button onClick={handleAddBox}>Add</button>
        <div style={{display : 'flex',
         flexWrap : 'wrap',
         marginTop : "20px"
    
    }}>
        {boxes.map((boxColor, index) => (
          <div
            key={index}
            style={{
              
              width: '250px',
              height: '250px',
              backgroundColor: boxColor,
              margin: '20px',
            }}
          />
        ))}
        </div>
        
    </form>
  )
}

export default BoxColor