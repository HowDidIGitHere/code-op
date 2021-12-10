import React from "react";
import "./goals_create.css"

class GoalsCreate extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: "",
      description: "",
      tasks: [],
      subTask: {body: ""}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.addSubTaskToArray = this.addSubTaskToArray.bind(this)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  updateSubTask(field){
    return e => this.setState({subTask: {[field]: e.currentTarget.value, completed: false} })
  }

  addSubTaskToArray(){
    this.setState({tasks: this.state.tasks.concat([this.state.subTask])})
    this.setState({subTask: {body: "", completed: false}})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createGoal(this.state);
  }

  render(){
    if(!this.state) return "loading";

    return(
      <form className="goals-create-form" onSubmit={this.handleSubmit}>
        <div className="goals-create-title">
          <h4>Create a title:</h4>
          <input className="title" onChange={this.update('title')} type="text" placeholder="Title" value={this.state.title}/>
        </div>

        <div className="goals-create-description">
          <h4>Create a description:</h4>
          <input className="description" onChange={this.update('description')} type="text" placeholder="Description" value={this.state.description} />
        </div>

        <div className="line"></div>

        <div className="goals-create-task">
          <div>
            <h5>Create a new task:</h5>
            <input className="subtask" onChange={this.updateSubTask('body')} type="text" placeholder="'Deploy for staging'" value={this.state.subTask.body}/>
          </div>
          <div className="add-task">
            <button className="button" onClick={this.addSubTaskToArray}>Add Task</button>
          </div>
        </div>

        <div className="line"></div>
        
        <div className="goals-create-task-list">
          <h4>Tasks:</h4>
          {this.state.tasks.map((task, idx) => 
            <li className="create-goal-tasks" key={idx}>
              {task.body}
            </li>
          )}
        </div>
        
        <div className="line"></div>

        <div className="add-goal">
          <button type="submit">Finish</button>
        </div>
      </form>
    )
  }
}

export default GoalsCreate