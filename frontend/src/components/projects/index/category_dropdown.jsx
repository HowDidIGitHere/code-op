import React from 'react';

const CategoryDropdown = ({category}) => {
  return (
    <div className='dropdown'>
      <button className='dropdownbtn'>
        <p>{category[0]}</p><i class="fas fa-chevron-down fa-xs"></i></button>
      <div className='dropdown-content'>
        { category[1].map((item) => { 
          return (
            <label class="checklist-item">{item}
                <input type="checkbox" value={item}/>
                <span className="checkmark"></span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryDropdown;
