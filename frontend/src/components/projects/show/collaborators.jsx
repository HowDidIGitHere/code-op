import React from 'react';
import { Link } from 'react-router-dom'

const Collaborators = props => {
  return (
    <div className='collaborator'>
      {props.creator ? <p className='collab'><Link to={`/users/${props.creator._id}`}>{props.creator.username}</Link></p> : null}
      {props.collaborators.map((person) => 
        // <p>{person.username}</p> 
        <p className='collab'><Link to={`/users/${person._id}`}>{person.username}</Link></p>
      )}
    </div>
  )
}

export default Collaborators;