import React from "react";

class GoalsShow extends React.Component{
  constructor(props){
    super(props)
    this.toggle = false
  }

  handleToggle(){
    if (!this.toggle){
      this.toggle = true
    } else {
      this.toggle = false
    }
  }

  render(){
    return(
      <div className="goals-show">
        <div className="goals-title">
          <h1>{this.props.title}</h1>
          <button onClick={this.handleToggle}>Edit</button> 
        </div>

        <div className="goals-dropdown" style={this.toggle ? {display: "block"} : {display: "none"}}>
          <div className="goals-description">{this.props.description}</div>

          <div className="line"></div>

          <div className="goals-tasks">
            <h4>Tasks:</h4>
            {this.props.tasks.map((task, idx) => 
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