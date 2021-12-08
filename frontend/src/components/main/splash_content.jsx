import React from 'react';

const SplashContent = ({ handleClick }) => {
  return (
    <div className='splash-content'>
      <img src="https://res.cloudinary.com/dzixdb9eu/image/upload/v1638986282/unsplash_wD1LRb9OeEo_2_me7jle.png" alt="banner" />
      <div className='overlay'>
        <h1>What will your next passion project be?</h1>
        <button 
          className='cta'
          onClick={handleClick}
          >Discover Here</button>
      </div>
    </div>
  )
}

export default SplashContent