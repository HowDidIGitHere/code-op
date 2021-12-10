import React from 'react';
import { Link } from 'react-router-dom'

const Collaborators = props => {
  return (
    <div className='collaborator'>
      {props.collaborators.map((person) => 
        // <p>{person.username}</p> 
        <Link to={`/users/${person._id}`}><p className='collab'>{person.username}</p></Link>
      )}
    </div>
  )
}

export default Collaborators;