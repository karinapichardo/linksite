import logo from './pichardo.jpeg';
import youtubeLogo from './youtube.png';
import xLogo from './twitter.png';
import mediumLogo from './medium.png';
import emailLogo from './email.png';
import peterQuote from './peter.png';

import React, { useState } from 'react';
import './App.css';
import MediaContainer from './MediaContainer';

const App = () => {
  const [showCollection, setCollection] = useState(false);

  const handleOnClick = () => {
    setCollection(true);
  };

  const goBack = () => {
    // Navigate back to the previous page or component
    setCollection(false);
    console.log('l');
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='profilePic' alt='logo' />
        <p className='name'>
          Karina Pichardo
          <a href='mailto:pichardokarina824@gmail.com'>
            <img className='emailLogo' src={emailLogo} alt='email logo' />
          </a>
        </p>

        {showCollection ? (
          <p className='inspoHeader' onClick={goBack}>
            Go back
          </p>
        ) : (
          <p className='inspoHeader' onClick={handleOnClick}>
            Click for collection of things that inspire me
          </p>
        )}

        {showCollection ? (
          <div className='collectionWrapper'>
            <div className='collectionItemContainer'>
              <p className='quote'>
                “It’s really just a journey of evolution, everyday, it’s just
                constant improvement, constant curiosity, constantly getting
                better, the results don’t really matter, it’s the figuring out
                that matters” <br />
                <br />
                <span className='kobeName'>- Kobe Bryant</span>
              </p>
            </div>
            <div className='collectionItemContainer'>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/rwfyb6pVOcY?si=lXF1p0nM0qrOEk4W'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>
            <div className='collectionItemContainer'>
              <img
                src={peterQuote}
                className='collectionImg'
                alt='peter thiel quote'
              />
            </div>
            <div className='collectionItemContainer'>
              <a
                href='https://x.com/FoundersPodcast/status/1748683267287495080?s=20'
                target='_blank'
                className='collectionLink'
                rel='noreferrer'
              >
                via @FoundersPodcast
              </a>
            </div>
          </div>
        ) : (
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
        )}
      </header>
      <p className={showCollection ? 'copyrightCollectionView' : 'copyright'}>Made by Karina :) </p>
    </div>
  );
};

export default App;