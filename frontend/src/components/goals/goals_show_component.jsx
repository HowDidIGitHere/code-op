import React from "react";

class GoalsShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      toggle: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(){
    this.setState({ toggle: !this.state.toggle})
  }

  render(){
    return(
      <div className="goals-show">
        <div className="goals-title">
          <h1>{this.props.goal.title}</h1>
          <button onClick={this.handleToggle}>Edit</button> 
        </div>

        <div className="goals-dropdown" style={this.state.toggle ? {display: "block"} : {display: "none"}}>
          <div className="goals-description">{this.props.goal.description}</div>

          <div className="line"></div>

          <div className="goals-tasks">
            
            <h4>Tasks:</h4>
            {this.props.goal.tasks.map((task, idx) => 
              <li className="goal-tasks" key={idx}>
                {task.body}
              </li>
            )}
          </div>
        </div>

      </div>
    )
  }
}

export default GoalsShow