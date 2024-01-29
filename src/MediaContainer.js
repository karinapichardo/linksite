import {React, useState} from 'react';
import './App.css';
import linkButton from './link.png';

const MediaContainer = (props) => {

  const [isCopied, setIsCopied] = useState(false);

  const handleDivClick = () => {
    // Navigate to another site when the div is clicked
    window.open(props.link, '_blank');
  };

  const handleCopyClick = (event) => {
    const textToCopy = props.message;

    // Using the Clipboard API
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log('Text successfully copied to clipboard');
        setIsCopied(true);

         // Reset the copied state after a short delay
         setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      })
      .catch((err) => {
        console.error('Unable to copy text to clipboard', err);
      });

    // Stop the propagation to prevent the div click event
    event.stopPropagation();
  };

  return (
      <div className='mediaContainer' onClick={handleDivClick}>
        <img src={props.logo} className={props.isTwitter ? 'xLogo' : 'mediaLogo'} alt='media logo' />
        <p className={props.isTwitter ? 'twitterMediaName' : 'mediaName'}>{props.mediaName}</p>
        <button className='copyButton' onClick={handleCopyClick}>
          {isCopied ? <p className="copiedMessage">Copied!</p> : <img src={linkButton} className='linkButton' alt='link button' />}
        </button>
      </div>
  );
};

export default MediaContainer;