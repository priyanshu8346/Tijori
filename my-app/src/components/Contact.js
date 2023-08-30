import React, {useState} from 'react'
import image from '../images/priyanshu-removebg-preview.png'


export default function Contact() {
  const [information, setInformation] = useState({name:"",email:"", message:""});
  const onChange = (e) => {
    setInformation({ ...information, [e.target.name]: e.target.value })}

    const sendMail= async()=>{
        const response = await fetch(`http://localhost:5000/email/contact`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:information.name, email: information.email, message:information.message})
        });
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      await sendMail();
      // You can perform additional actions here after sending the email if needed
    };
    
  return (
    <div className="about-container">
    <h1 className="about-heading">Contact Us</h1>
    <div className="about-content" >
      <img src={image} alt="About Us" className="about-image" />
      <div className="about-text">
      <form onSubmit={handleSubmit}>
      <div className="form-group mt-2">
    <label htmlFor="exampleFormControlInput1 mb-4"><b>Name</b></label>
    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" name='name' value={information.name}  onChange={onChange}/>
  </div>
  <div className="form-group mt-2">
    <label htmlFor="exampleFormControlInput1 mb-4"><b>Email address</b></label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' value={information.email}  onChange={onChange}/>
  </div>
  <div className="form-group mt-2">
    <label htmlFor="exampleFormControlTextarea1"><b>Feedback</b></label>
    <textarea className="form-control mt-2" id="exampleFormControlTextarea1" name='message' value={information.message}  onChange={onChange} rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-primary mt-3" >Submit</button>
</form>

      </div>
    </div>
  </div>
  )
}
