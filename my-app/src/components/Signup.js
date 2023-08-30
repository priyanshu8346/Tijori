import React,{useState} from 'react'
import {  useNavigate } from 'react-router-dom';

export default function Signup(props) {
  const {showAlert} = props;
  const [credential, setcredential] = useState({email:"", name:"", password:"", cPassword:""});
  const navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const {name,email,password} = credential;
    const response = await fetch(`http://localhost:5000/auth/createUser`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    });
    
        const json = await response.json();

    if(json.success){
    localStorage.setItem('token', json.authToken)
    localStorage.setItem('name', json.name)
    navigate("/notes");
    showAlert("Congrats you own an online TIJORI now", "success");
    }
    else{
      showAlert("Invalid", "danger");
    }
        
    }
  const onChange = (e) => {
    // here this syntax means notes ko vaisa hi rehne do bs jo value e.target.name ki through passs ki ja rhi hai unhe ya to update krdo ya add krdo
    // here it is stored in {} because we are using above note as object just spreadd operator Syntax don't worry 
    setcredential({ ...credential, [e.target.name]: e.target.value })
}
  return (
    <div className='container'>
      <form>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" onChange={onChange} name='name' aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={onChange} name='password' id="Password" minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" onChange={onChange} name='cPassword' id="cPassword" minLength={5} required />
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </div>
  )
}
