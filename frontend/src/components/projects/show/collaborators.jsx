import React from 'react';

const Collaborators = () => {
  let collaborators = ["kenny", "nicole", "abe", "lori", "jamie"]
  return (
    <div>
      {collaborators.map((person) => 
        <p>{person}</p> 
      )}
    </div>
  )
}

export default Collaborators;