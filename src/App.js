import logo from "./pichardo.jpeg";
import youtubeLogo from "./youtube.png";
import xLogo from "./twitter.png";
import mediumLogo from "./medium.png";
import React from "react";
import "./App.css";

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="profilePic" alt="logo" />
        <p className="name">Karina Pichardo</p>
        <div className="wrapper">
          <a
            href="https://www.youtube.com/channel/UCx_X6YawdmcX1ojf8tRClKw"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mediaContainer">
              <img
                src={youtubeLogo}
                className="youtubeLogo"
                alt="youtube logo"
              />
              <p className="mediaName">Youtube</p>
            </div>
          </a>

          <a
            href="https://twitter.com/karinapichardox"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mediaContainer">
              <img src={xLogo} className="twitterLogo" alt="x logo" />
              <p className="mediaName">Twitter</p>
            </div>
          </a>

          <a
            href="https://karinapichardo.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mediaContainer">
              <img
                src={mediumLogo}
                className="youtubeLogo"
                alt="medium logo"
              />
              <p className="mediaName">Medium</p>
            </div>
          </a>
        </div>
      </header>
    </div>
  );
};

export default App;