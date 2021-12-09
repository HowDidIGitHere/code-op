import React from 'react';

const Collaborators = props => {
  console.log(props.collaborators)
  return (
    <div className='collaborator'>
      {props.collaborators.map((person) => 
        <p>{person.username}</p> 
      )}
    </div>
  )
}

export default Collaborators;