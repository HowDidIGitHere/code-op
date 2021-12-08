import React from "react";

class GoalsCreate extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: "",
      description: "",
      tasks: []
    }
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
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
        
        <input className="task" type="text" />
      </div>
    )
  }
}

export default GoalsCreate