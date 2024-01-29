import logo from './pichardo.jpeg';
import youtubeLogo from './youtube.png';
import xLogo from './twitter.png';
import mediumLogo from './medium.png';
import React from 'react';
import './App.css';
import MediaContainer from './MediaContainer';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='profilePic' alt='logo' />
        <p className='name'>Karina Pichardo</p>
        <div className='wrapper'>
          <MediaContainer
            message='https://www.youtube.com/channel/UCx_X6YawdmcX1ojf8tRClKw'
            logo={youtubeLogo}
            mediaName='Youtube'
            link='https://www.youtube.com/channel/UCx_X6YawdmcX1ojf8tRClKw'
          />
          <MediaContainer
            message='https://twitter.com/karinapichardox'
            logo={xLogo}
            mediaName='Twitter'
            link='https://twitter.com/karinapichardox'
            isTwitter={true}
          />
          <MediaContainer
            message='https://karinapichardo.medium.com/'
            logo={mediumLogo}
            mediaName='Medium'
            link='https://karinapichardo.medium.com/'
          />
        </div>
      </header>
      <p className='copyright'>Made by Karina :) </p>
    </div>
  );
};

export default App;