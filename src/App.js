import { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div>
      <div className="header">
        <div className="header-item">
          <i class="bi bi-box-arrow-in-down-left"></i>
          <span>ChatGPT 4o mini</span>
          <i class="bi bi-chevron-down"></i>
        </div>
        <div className="header-item">
          <button className="btn btn-dark">Log in</button>
          <button className="btn btn-outline-secondary">Sign up</button>
        </div>
      </div>
      <div className="logo">
        {/* <i class="bi bi-twitter"></i> */}
        <img src="https://1000logos.net/wp-content/uploads/2023/02/ChatGPT-Logo-500x281.png" alt="logo-chatgpt" />
      </div>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-outline-secondary">
              <strong>
                <p>Suggest fun activities</p>
              </strong>
              <p>to help me make friends in a new city</p>
            </button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-outline-secondary">
              <strong>
                <p>Create a content calender</p>
              </strong>
              <p>for a TikTok account</p>
            </button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-outline-secondary">
              <strong>
                <p>Plan a mental health day</p>
              </strong>
              <p>to help me relax</p>
            </button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-outline-secondary">
              <strong>
                <p>Write a python code</p>
              </strong>
              <p>to automatesending daily email reports</p>
            </button>
          </div>
        </div>
      </div>
      <div className="search">
        <input className="form-control input-search" type="text" placeholder="Message ChatGPT"></input>
        <button className="btn"><i class="bi bi-arrow-up-circle"></i></button>
      </div>
      <div className="footer">
        <p>ChatGPT can make mistakes. Check important info.</p>
      </div>
    </div>
  );
}

export default App;
