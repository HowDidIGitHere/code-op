import React from "react";

class GoalsShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      tasks: this.props.goal.tasks,
      task: '',
      toggle: false,
      editToggle: false,
      rerenderPlease: false
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggle(){
    this.setState({ toggle: !this.state.toggle})
  }

  handleChange(e) {
    e.preventDefault();
    e.stopPropagation();
    const nextState = Object.assign({}, this.state, { task: e.target.value });
    this.setState(nextState);
  }

  handleSubmit(e) {
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

  handleEdit(idx) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      const nextTasks = this.props.goal.tasks.splice(idx, 1)
    }
  }

  handleDelete(idx) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      let dupeTasks = this.state.tasks;
      dupeTasks.splice(idx, 1)
      const updatedGoal = Object.assign({}, this.props.goal, { tasks: dupeTasks })
      this.props.updateGoal(updatedGoal).then(() => this.setState({ rerenderPlease: !this.state.rerenderPlease }))
    }
  }

  render(){
    return(
      <div className="goals-show">
        <div className="goals-title">
          <h1>{this.props.goal.title}</h1>
          <div className="goals-description">{this.props.goal.description}</div>
          <button onClick={this.handleToggle}>View Tasks</button> 
        </div>

        <div className="goals-dropdown" style={this.state.toggle ? {display: "block"} : {display: "none"}}>

          {/* <div className="line"></div> */}

          <div className="goals-tasks">
            <div className="add-task-container">
              {/* <div className="add-task-header">
                <p>Add a task</p>
              </div> */}
              <div className='add-task-textbox'>
                <form onSubmit={this.handleSubmit}>
                  <textarea onChange={this.handleChange} value={this.state.task} placeholder="Add a task!"></textarea>
                  <button type='submit'>Submit</button>
                </form>
              </div>
            </div>
            <h4>Tasks:</h4>
            {this.state.tasks.map((task, idx) => 
              <li className="goal-tasks" key={idx}>

                <div>
                  <p>{task.body}</p>
                  <div>
                    {/* <button onClick={this.handleMark(idx)}>Mark Done</button> */}
                    <button onClick={this.handleEdit(idx)}>Edit</button>
                    <button onClick={this.handleDelete(idx)}>Delete</button>
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