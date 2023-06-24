import React,{useState} from 'react'

const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLasttname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setConfirm] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, email, password,passwordConfirm };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}
    };
    const firstNameMessage = () => {
        if( firstname.length < 3){
            return "First Name must be at least 2 charaters";
        }
        else{
            return "";
        }
       
    }
    const lastNameMessage = () => {
        if(lastname.length < 3){
            return"Last Name must be at least 2 charaters";
        }
        else{
            return "";
        }
    }
    const emailMessage = () => {
        if(email.length < 5){
            return " the field must be at least 5 characters.";
        }
        else{
            return "";
        }
    }

    const passMessage = () => {
        if(password.length < 8){
            return "The passwords must match and be at least 8 characters";
        }
        else if (password.length !== passwordConfirm.length){
            return "Confirm Password must match";
        }
        else{
            return "";
        }
    }

    
    return (
        <form onSubmit={ createUser }>
            <h3>{ formMessage() }</h3>
	        <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <h3>{ firstNameMessage() }</h3>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLasttname(e.target.value) } />
            </div>
            <h3>{ lastNameMessage() }</h3>
          
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <h3>{emailMessage()}</h3>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirm(e.target.value) } />
            </div>
            <h3>{passMessage()}</h3>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default Form;