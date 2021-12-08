import React from 'react';

const GoalItem = () => {
  return (
    <div className='goal'>
      <div className='main-goal'>
        <div className='goal-title'>
          <h2>Title</h2>
        </div>
        <div className='goal-description'>
          <p>this is a brief description of a goal</p>
        </div>
      </div>
      <div className='sub-task-list'>
        <ul>
          <li>task 1</li>
          <li>task 2</li>
        </ul>
      </div>
    </div>
  )
}

export default GoalItem;