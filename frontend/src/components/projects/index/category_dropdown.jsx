import React from 'react';

const CategoryDropdown = ({category}) => {
    let testArr = ['test', 'testing', 'tester', 'test1', 'testfile', 'testie'];
  return (
    <div className='category-filter-containers'>
      <i class="fas fa-chevron-down"></i>
      <button className='dropdownbtn'>
        <p>{category}</p><i className="fas fa-chevron-down"></i></button>
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
