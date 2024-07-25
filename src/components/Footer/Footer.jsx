import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error fugiat tenetur perspiciatis. Nemo odit eius illo harum optio. Consequuntur recusandae ea corporis? Tempore culpa atque a doloribus! Id, reprehenderit debitis.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <a href="https://in.linkedin.com/in/mohd-akram01"><img src={assets.linkedin_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 78906 56790</li>
                    <li>inquiry@tomato.com</li>
                </ul>

            </div>
           
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 © Tomato.com - Developed and Maintained By Akram.</p>
      
    </div>
  )
}

export default Footer
