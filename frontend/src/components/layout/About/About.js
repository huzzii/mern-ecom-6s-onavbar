import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/hujjiibaba";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/hujjiibaba/image/upload/v1643544186/avatars/k2fxqcrrlcdsjyv7kllo.jpg"
              alt="Full Stack Engineer"
            />
            <Typography>Huzaif Shaikh</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              Full Stack Engineer, <br />
              This is the ecommerce website of Huzaif Shaikh. <br />
              He is a Full Stack Engineer and a Web Developer. <br />
              He is a self taught programmer and a self taught designer. <br />
              This project is made with React.js and Node.js. <br />
              Backend is made with Express.js and MongoDB. <br />
              Frontend is made with React.js and Material-UI. <br />
              
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.facebook.com/huzaif.shaikh1"
              target="blank"
            >
              <FacebookIcon className="facebookSvgIcon" />
            </a>

            <a href="https://instagram.com/meabhisingh" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
