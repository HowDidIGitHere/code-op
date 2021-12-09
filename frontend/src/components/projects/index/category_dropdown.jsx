import React from 'react';

const CategoryDropdown = ({category}) => {
    let testArr = ['test', 'testing', 'tester', 'test1', 'testfile', 'testie'];
  return (
    <div className='category-filter-containers'>
      <button className='dropdownbtn'>
        <p>{category}</p><i class="fas fa-chevron-down fa-xs"></i></button>
      {/* <div className='checklist'>
        { testArr.map((item) => { 
          return (
            <label class="checklist-item">{item}
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
          )
        })}
      </div> */}
    </div>
  )
}

export default CategoryDropdown;
