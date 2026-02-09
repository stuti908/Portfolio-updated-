import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="form-page">
      <div className="form-left">
        <h1><span className="green-text">Tutorials</span>Point<br />for Business</h1>
        <p>Upskill your workforce with tailored corporate training and unlock endless possibilities for your organization.</p>
      </div>

      <div className="form-right">
        <h2>Request a Demo</h2>
        <form className="demo-form">
          <input type="text" placeholder="Enter your Name" required />
          <input type="email" placeholder="Enter Business Email ID" required />
          <div className="phone-input">
            <select>
              <option>India (+91)</option>
              <option>USA (+1)</option>
            </select>
            <input type="tel" placeholder="Enter Phone Number" required />
          </div>
          <div className="company-details">
            <input type="text" placeholder="Company Name" required />
            <input type="text" placeholder="Job Title" required />
          </div>
          <input type="text" placeholder="What are your training needs?" />
          <div className="captcha-section">
            <input type="text" placeholder="Captcha code" required />
            <div className="captcha-img">b2b134</div>
          </div>
          <button type="submit">Submit Demo Request</button>
        </form>
      </div>
    </div>
  );
}