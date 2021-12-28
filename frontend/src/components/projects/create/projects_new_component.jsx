import React from 'react';
import CategoryChecklist from './category_checklist';
import './project_create.css'

class ProjectsNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      desctiption: "",
      creator: "",
      diagram: "",
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  componentWillMount() {
    this.props.fetchTags({ namesByCategory: "position,software,platform"})
    this.props.fetchCreatorProjects(this.props.user.id);
  }

  update(type) {
    return e => this.setState({ [type]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    let diagram = { 
      name: "Example Diagram",
      content: (
`classDiagram
GrandParent <|-- Parent
Parent <|-- ChildOne
Parent <|-- ChildTwo
GrandParent <|-- Uncle
GrandParent <|-- Aunt
class GrandParent {
+Integer age
+giveHardCandy()
}
class Parent {
+String profession
+takeToSchool(...children)
}
class Uncle {
+Array coinCollection
}
class Aunt {
+Bool employeeOfTheYear
+pinchCheeks()
}
class ChildOne {
+String favoriteBlankie
+throwFit()
}
class ChildTwo {
+Boolean hatesCelery
+reacPictureBook()
}`
      )
    }

    let types = "";
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (var i = 0; i < checkboxes.length; i++) {
      if (i === checkboxes.length - 1) 
        types = types.concat(checkboxes[i].value)
      else
        types = types.concat(checkboxes[i].value, ",")
    }

    this.props.createDiagram(diagram)
      .then(res => {
        let project = {
          title: this.state.title,
          description: this.state.description,
          creator: this.props.user.id,
          diagram: res.diagram,
          }
        this.props.createProject(project)
          .then(res => { 
            let tags = {}
            if (!res.project) return;
            tags['it'] = res.project._id;
            tags['modelType'] = 'Project';
            tags['names']= types
            this.props.createTag(tags).then(this.props.history.push('/projects')).then(this.props.history.reload)
          })
      })
  }

  render() {
    if (!this.props.tags) return null
    const { tags } = this.props;
    const categories = [
      ['Software', tags.software.slice(0,15)],
      ['Platform', tags.platform], 
      ['Position', tags.position], 
    ]
    return(
      <div className='create-project'>
        <form className='create-project-form' onSubmit={this.handleSubmit}>
          <div className='main-form'>
          <div className='form-header'>
            <p>Create a New Project</p>
          </div>
          <div className='form-body'>
            <div className='user-input'>
            <label className='input-field'>Project Title</label>
            <input className='project-title'
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
            />
            <br />
            <label className='input-field'>Github Link</label>
            <input className='project-git'
              type="text"
              value={this.state.github}
              onChange={this.update('github')}
            />
            <br />
            <div className='user-checks'>
              { categories.map((category) => {
                return <CategoryChecklist category={category} />
              })}
            </div>
            <label className='input-field'>Add a description of your project</label>
            <textarea 
              className='project-description'
              value={this.state.description}
              onChange={this.update('description')}
            />
            </div>
          </div>
          </div>
          <div className='form-footer'>
            <button className='save-button' type='submit'>Save</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ProjectsNew