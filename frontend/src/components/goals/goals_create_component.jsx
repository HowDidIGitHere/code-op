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
    // const goal = {}
    // goal[title] = this.state.title
    // goal[description] = this.state.description
    // goal[tasks] = this.state.tasks

    // this.props.createGoal(goal)
    this.props.createGoal(this.state)
  }

  render(){
    if(!this.state) return "loading";

    return(
      <form className="goals-create-form" onSubmit={this.handleSubmit}>
        <input className="title" onChange={this.update('title')} type="text" placeholder="Title" value={this.state.title}/>
        <textarea className="description" onChange={this.update('description')} type="text" placeholder="Description" value={this.state.description} />
        
        <h3>Create a new task</h3>
        <input className="subtask" onChange={this.updateSubTask('body')} type="text" placeholder="body" value={this.state.subTask.body}/>
        <button onClick={this.addSubTaskToArray}>Add Task</button>

        <button type="submit">Add Goal</button>
      </form>
    )
  }
}

export default GoalsCreate