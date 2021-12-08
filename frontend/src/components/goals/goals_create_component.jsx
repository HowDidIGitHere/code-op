import React from "react";

class GoalsCreate extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: "",
      description: "",
      tasks: [],
      subTask: {
        body: "",
        completed: false
      }
    }
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  updateSubTask(field){
    return e => this.setState({subTask: {[field]: e.currentTarget.value} })
  }

  addSubTaskToArray(){
    this.setState({tasks: this.state.tasks.concat([this.state.subTask])})
    this.setState({subTask: {body: "", completed: false}})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.createGoal(this.state)
  }

  render(){
    return(
      <div className="goals-create-form">
        <input className="title" onChange={this.update('title')} type="text" value={this.state.title}/>
        <textarea className="description" onChange={this.update('description')} type="text" value={this.state.description} />
        
        <input className="subtask" onChange={this.updateSubTask('body')} type="text" />
        <input className="subtask" onChange={this.updateSubTask('completed')} type="text" />
        <button onClick={this.addSubTaskToArray}></button>
      </div>
    )
  }
}

export default GoalsCreate