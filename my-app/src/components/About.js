import React from 'react'
import '../App.css'
import logo from '../images/logo_design.jpg'

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <div className="about-content">
        <img src={logo} alt="About Us" className="about-image" />
        <div className="about-text">
          <p>
            Welcome to our About page! We are a passionate team dedicated to building amazing web applications.
            Our mission is to provide the best user experience and deliver high-quality products that meet our customers' needs.
            Feel free to explore our website and learn more about what we do!
            Welcome to our About page! We are a passionate team dedicated to building amazing web applications.
            Our mission is to provide the best user experience and deliver high-quality products that meet our customers' needs.
            Feel free to explore our website and learn more about what we do!
            Welcome to our About page! We are a passionate team dedicated to building amazing web applications.
            Our mission is to provide the best user experience and deliver high-quality products that meet our customers' needs.
            Feel free to explore our website and learn more about what we do!
          </p>
        </div>
      </div>
    </div>
  );
};
