import logo from './pichardo.jpeg';
import youtubeLogo from './youtube.png';
import xLogo from './twitter.png';
import mediumLogo from './medium.png';
import emailLogo from './email.png';

import React, { useState } from 'react';
import './App.css';
import MediaContainer from './MediaContainer';

const App = () => {
  const [showCollection, setCollection] = useState(false);

  const handleOnClick = () => {
    setCollection(true);
  };

  const goBack = () => {
    setCollection(false);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='headerContainer'>
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
</div>
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
              <p className='quote'>
                <span className='spanText'>
                  "It's better to think of distribution as something essential
                  to the design of your product.
                </span>
                <br />
                <br />
                If you've invented something new but you haven't invented an
                effective way to sell it, you have a bad business—no matter how
                good the product. <br />
                <br />
                <span className='spanText'>
                  Superior sales and distribution by itself can create a
                  monopoly, even with no product differentiation.
                </span>
                <br />
                <br />
                The converse is not true. <br />
                <br />
                No matter how strong your product-even if it easily fits into
                already established habits and anybody who tries it likes it
                immediately —you must still support it with a strong
                distribution plan." <br />
                <br />
                <span className='spanText'>- Peter Thiel</span>
              </p>
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
            <div className='collectionItemContainer'>
              <p className='quote'>
                <span className='spanText'>
                  On why Bill Gates ripped out his car radio:
                </span>
                <br />
                <br />
                MM: “Back in the 1980s, Bill Gates gave me a ride to the
                airport, and the radio was missing from the car. Big gaping hole
                in the dashboard. I said ‘Bill what happened, did you get ripped
                off?” <br />
                <br />
                BG: “No, I had it taken out.” <br />
                <br />
                MM: “Why did you have it taken out?” <br />
                <br />
                BG: “I drive from my home to the office, which is seven minutes
                and 32 seconds. And then I’ll drive from the office to the
                airport which is however long. If I’ve got the radio, I’m afraid
                that I’ll switch it on and I won’t be thinking about Microsoft.”
                <br /> <br />
                <span className='spanText'>“That’s obsession.”</span>
              </p>
            </div>
            <div className='collectionItemContainer'>
              <a
                href='https://zach.blog/p/inescapable-ideas-obsession-hours-motivation-ten-bullets?utm_source=zach.blog&utm_medium=newsletter&utm_campaign=on-inescapable-ideas-obsession-hours-and-motivation-ten-bullets'
                target='_blank'
                className='collectionLink'
                rel='noreferrer'
              >
                via Ten Bullets newsletter
              </a>
            </div>
          </div>
        ) : (
          <div className='wrapper'>
            <MediaContainer
              message='https://www.youtube.com/channel/UCx_X6YawdmcX1ojf8tRClKw'
              logo={youtubeLogo}
              mediaName='Youtube'
              link='https://www.youtube.com/channel/UCx_X6YawdmcX1ojf8tRClKw?sub_confirmation=1'
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
      <p className={showCollection ? 'copyrightCollectionView' : 'copyright'}>
        Made by Karina :)
      </p>
    </div>
  );
};

export default App;