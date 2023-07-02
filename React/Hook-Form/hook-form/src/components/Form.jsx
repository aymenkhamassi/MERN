import React,{useState} from 'react'

const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpass, setConfirm] = useState(""); 
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password,confirmpass };
        console.log("Welcome", newUser);
    };
  return (
    <form onSubmit={ createUser }>
    <div>
        <label>First Name: </label> 
        <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
    </div>
    <div>
        <label>Last Name: </label> 
        <input type="text" onChange={ (e) => setLastname(e.target.value) } />
    </div>
    <div>
        <label>Email Address: </label> 
        <input type="text"  onChange={ (e) => setEmail(e.target.value) } />
    </div>
    <div>
        <label>Password: </label>
        <input type="password" onChange={ (e) => setPassword(e.target.value) } />
    </div>
    <div>
        <label>Confirm Password: </label>
        <input type="password" onChange={ (e) => setConfirm(e.target.value) } />
    </div>
    <p>Your Form Data</p>
     <ul>
        <li>First Name : {firstname}</li>
        <li>Last Name : {lastname}</li>
        <li>Email : {email}</li>
        <li>Password : {password}</li>
        <li>Confirm Password : {confirmpass}</li>
     </ul>
     {/* <h5>First Name : {firstname}</h5>
     <h5>Last Name : {lastname} </h5>
     <h5>Email : {email}</h5>
     <h5>Password : {password}</h5>
     <h5>Confirm Password : {confirmpass}</h5>

      */}
    

    </form>
  );
}

export default Form