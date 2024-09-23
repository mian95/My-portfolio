import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

function Contact() {
// 
const [result, setResult] = React.useState("");

const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);

  formData.append("access_key", "");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    alert("Email is submitted")
    setResult("Form Submitted Successfully");
    event.target.reset();
  } else {
    console.log("Error", data);
    setResult(data.message);
  }
};

// 


  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>let's talk</h1>
            <p>
                I'm currently avaliable to take on new projects, so feel free talk me 
            </p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon}  className='contact-icon'/>
                    <p>umiarim24@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon}  className='contact-icon'/>
                    <p>+92-309-5330695</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} className='contact-icon' />
                    <p>Jrw, Faialabad, Pakistan</p>
                </div>
            </div>

        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name'/>
            <label> Your Email</label>
            <input type='email' placeholder='Enter Your Email' name='email'/>
            <label htmlFor="">Write Your Message</label>
            <textarea name='message' rows='8' placeholder='Write Your Message here'></textarea>
            <button type="submit" className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>

  )
}

export default Contact;
