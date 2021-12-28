import React from 'react';

const SplashHeader = ({ handleClick }) => {
  return (
    <div className='splash-header'>
      <div className='banner'></div>
      <div className='overlay container-fluid'>
        <h1>What will your next passion project be?</h1>
        <button 
          className='cta'
          onClick={handleClick}
          >Discover Here</button>
      </div>
    </div>
  )
}

export default SplashHeader