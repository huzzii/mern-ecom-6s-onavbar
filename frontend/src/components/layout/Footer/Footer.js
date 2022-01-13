import React from 'react'
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download app for ios and android mobile phone</p>
                <img src={playStore} alt="PlayStore" />
                <img src={appStore} alt="AppStore" />
            </div>
            <div className="midFooter">
                <h1>MERN ECOMMERCE</h1>
                <p>High Quality is our first priority</p>
                <p>Made With ❤ By Huzaif Shaikh</p>
            </div>
            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="https://instagram.com/hujjiibaba">Instagram</a>
                <a href="https://instagram.com/hujjiibaba">Facebook</a>
                <a href="https://instagram.com/hujjiibaba">LinkedIn</a>
            </div>
        </footer>
    )
}

export default Footer
