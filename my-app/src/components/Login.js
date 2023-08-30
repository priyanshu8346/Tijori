import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from './Alert';
import login from '../images/login.jpg'

export default function Login(props) {
  const { showAlert } = props;
  let navigate = useNavigate();
  const [credential, setcredential] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credential.email, password: credential.password })
    });

    const json = await response.json();

    if (json.success) {
      localStorage.setItem('token', json.authToken)
      localStorage.setItem('name', json.name)
      navigate("/notes");
      showAlert("Logged in successfully", "success");
    }
    else {
      showAlert("Internal server error", "danger");
    }

  }
  const onChange = (e) => {
    // here this syntax means notes ko vaisa hi rehne do bs jo value e.target.name ki through passs ki ja rhi hai unhe ya to update krdo ya add krdo
    // here it is stored in {} because we are using above note as object just spreadd operator Syntax don't worry 
    setcredential({ ...credential, [e.target.name]: e.target.value })
  }
  return (
    <div style={{ backgroundImage: login }}>
      <Alert alert={alert} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form style={{ width: '80vw' }}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" value={credential.email} name="email" onChange={onChange} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credential.password} onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>log me IN</button>
        </form>
      </div>
    </div>
  )
}
