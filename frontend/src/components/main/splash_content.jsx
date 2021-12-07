import React from 'react';

const SplashContent = ({ handleClick }) => {
  return (
    <div className='splash-content'>
      <div className='splash-img-contents'>
          <h1>Find your next passion project</h1>
          <button 
            className='cta'
            onClick={handleClick}
            >Discover Here</button>
        </div>
    </div>
  )
}

export default SplashContent;