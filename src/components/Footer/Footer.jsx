import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';


function Footer() {
  return (
    <div  className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Umair Imran</h1>
                <p>I'm a Frontend developer from Pakistan</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter Yor Email'/>
                </div>
                <button>
                  Subscribe
                </button>
            </div>
        </div>
      <hr />
      <div className="footer-buttom">
        <div className="footer-buttom-left">
            <p>2023 umair, All &copy; rights are riserved</p>
        </div>
        <div className="footer-buttom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}
export default Footer
