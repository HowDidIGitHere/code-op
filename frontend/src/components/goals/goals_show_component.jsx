import React from "react";

class GoalsShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: this.props.goal.title,
      description: this.props.goal.description,
      tasks: this.props.goal.tasks,
      task: '',
      toggle: false,
      editToggle: false,
      rerenderPlease: false
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleGoalEdit = this.handleGoalEdit.bind(this);
  }

  handleToggle(){
    this.setState({ toggle: !this.state.toggle})
  }

  handleTaskChange(e) {
    e.preventDefault();
    e.stopPropagation();
    const nextState = Object.assign({}, this.state, { task: e.target.value });
    this.setState(nextState);
  }

  handleTaskSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const nextTasks = this.state.tasks.concat([{ body: this.state.task, completed: false }]);
    const updatedGoal = Object.assign({}, this.props.goal, { tasks: nextTasks })
    this.props.updateGoal(updatedGoal).then(res => this.setState({ task: "", tasks: res.goal.tasks }))
  }

  // handleMark(idx) {
  //   return e => {
  //     e.preventDefault();
  //     e.stopPropagation();
  //   }
  // }

  handleTaskEdit(idx) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      this.setState({ editToggle: !this.state.editToggle })
    }
  }

  handleTaskDelete(idx) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      let dupeTasks = this.state.tasks;
      dupeTasks.splice(idx, 1)
      const updatedGoal = Object.assign({}, { _id: this.props.goal._id, title: this.state.title, description: this.state.description, tasks: dupeTasks })
      this.props.updateGoal(updatedGoal).then(() => this.setState({ rerenderPlease: !this.state.rerenderPlease }))
    }
  }

  handleGoalEdit(e) {
    e.preventDefault();
    e.stopPropagation();
    const updatedGoal = Object.assign({}, { _id: this.props.goal._id, title: this.state.title, description: this.state.description, tasks: this.state.tasks });
    this.props.updateGoal(updatedGoal).then(() => this.setState({ editToggle: !this.state.editToggle }));
  }

  handleGoalChange(type) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      this.setState({ [type]: e.target.value })
    }
  }

  render(){
    return(
      <div className="goals-show">
        <div className="goals-title" style={!this.state.editToggle ? {display: "block"} : {display: "none"}}>
          <h1>{this.state.title}</h1>
          <div className="goals-description">{this.state.description}</div>
        </div>
        <div className='goals-title-edit-form' style={this.state.editToggle ? {display: "block"} : {display: "none"}}>
          <form onSubmit={this.handleGoalEdit}>
            <input onChange={this.handleGoalChange('title')} value={this.state.title}/>
            <textarea onChange={this.handleGoalChange('description')} value={this.state.description}></textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>
          <button onClick={this.handleTaskEdit()}>Edit</button>
          <br/>
          <button onClick={this.handleToggle}>View Tasks</button> 

        <div className="goals-dropdown" style={this.state.toggle ? {display: "block"} : {display: "none"}}>

          {/* <div className="line"></div> */}

          <div className="goals-tasks">
            <div className="add-task-container">
              {/* <div className="add-task-header">
                <p>Add a task</p>
              </div> */}
              <div className='add-task-textbox'>
                <form onSubmit={this.handleTaskSubmit}>
                  <textarea onChange={this.handleTaskChange} value={this.state.task} placeholder="Add a task!"></textarea>
                  <button type='submit'>Submit</button>
                </form>
              </div>
            </div>
            <h4>Tasks:</h4>
            {this.state.tasks.map((task, idx) => 
              <li className="goal-tasks" key={idx}>

                <div>
                  {/* <div className='task-body-text' style={!this.state.editToggle ? {display: "block"} : {display: "none"}}> */}
                    <p>{task.body}</p>
                  {/* </div> */}
                  {/* <div className='task-edit' style={this.state.editToggle ? {display: "block"} : {display: "none"}}>
                    <div className='add-task-textbox'>
                      <form onSubmit={this.handleTaskSubmit}>
                        <textarea onChange={this.handleTaskChange} value={this.state.task} placeholder="Add a task!"></textarea>
                        <button type='submit'>Submit</button>
                      </form>
                    </div>
                  </div> */}
                  <div>
                    {/* <button onClick={this.handleMark(idx)}>Mark Done</button> */}
                    {/* <button onClick={this.handleTaskEdit(idx)}>Edit</button> */}
                    <button onClick={this.handleTaskDelete(idx)}>Delete</button>
                  </div>
                </div>
              </li>
            )}
          </div>
        </div>

      </div>
    )
  }
}

export default GoalsShow