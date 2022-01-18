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
    this.handleGoalDelete = this.handleGoalDelete.bind(this);
    // this.goalStyle = {display: "block", border-radius: ""}
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

  handleGoalDelete(id, idx) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      console.log(id, idx)
      this.props.deleteGoal(id)
        .then(() => this.props.toggleDeleteGoal(idx));
    }
  }

  render(){
    return(
      <div className="goals-show">
        <div className="goals-title" style={!this.state.editToggle ? {display: "block"} : {display: "none"}}>
          <h1>{this.state.title}</h1>
        </div>
          <div className='goal-description' style={!this.state.editToggle ? {display: "block"} : {display: "none"}}>
            <div className="goals-description">{this.state.description}</div>
          </div>
        <div className='goals-title-edit-form' style={this.state.editToggle ? {display: "block"} : {display: "none"}}>
          <form onSubmit={this.handleGoalEdit}>
            <input 
              className='goals-title' 
              onChange={this.handleGoalChange('title')} 
              value={this.state.title}/>
            <textarea
              className='goals-description' 
              onChange={this.handleGoalChange('description')} 
              value={this.state.description}></textarea>
            <button className='submit-edit' type='submit'>Submit</button>
          </form>
        </div>
        
        <div className='goal-buttons' style={!this.state.toggle ? {display: "block", borderRadius: '0 0 7px 7px'} : {display: "block"}}>
          <div className="function-wrap">
            <button className='edit-goal' onClick={this.handleTaskEdit()}>Edit</button>
            <button className='view-tasks' onClick={this.handleToggle}>View Tasks</button>
            <button className="delete-goal" onClick={this.handleGoalDelete(this.props.goal._id, this.props.idx)}>Delete</button>
          </div>
        </div>
        <div className='hidden-tasks' style={this.state.toggle ? {display: "block"} : {display: "none"}}>
          <h4 className='task-header'>Tasks:</h4>
          {this.state.tasks.map((task, idx) => 
            <li className="goal-tasks" key={idx}>
              <div>
                <p>{task.body}</p>
                <div>
                  <button className='delete-task' onClick={this.handleTaskDelete(idx)}>Delete</button>
                </div>
              </div>
            </li>
          )}
        </div>
        <div className="goals-dropdown" style={this.state.toggle ? {display: "block"} : {display: "none"}}>
          <div className="goals-tasks">
            <div className="add-task-container">
              <div className='add-task-textbox'>
                <form onSubmit={this.handleTaskSubmit}>
                  <textarea onChange={this.handleTaskChange} value={this.state.task} placeholder="Add a task!"></textarea>
                  <button className='submit-edit' type='submit'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default GoalsShow