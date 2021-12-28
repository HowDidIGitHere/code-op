import React from 'react';

const CategoryChecklist = ({category}) => {
  return (
    <div className='category-checklist-container'>
      <h1 className='create-category-header'>{category[0]}</h1>
      <div className='checklist'>
        { category[1].map((item) => { 
          return (
            <div className='checklist-container'>
            <label className="checklist-item">{item}
                <input type="checkbox" value={item}/>
                <span className="checkmark"></span>
            </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryChecklist;