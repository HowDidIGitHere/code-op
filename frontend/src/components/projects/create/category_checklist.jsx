import React from 'react';

const CategoryChecklist = () => {
  let testArr = ['test', 'testing', 'tester', 'test1', 'testfile', 'testie'];
  return (
    <div className='category-checklist-container'>
      <h1 className='category-header'>Category Header</h1>
      <div className='checklist'>
        { testArr.map((item) => { 
          return (
            <label class="checklist-item">{item}
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryChecklist;