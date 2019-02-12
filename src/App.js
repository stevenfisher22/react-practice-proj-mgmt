import React, { Component } from 'react';
import Project from './components/Project';
import AddProject from './components/AddProject';
import uuid from 'uuid';


class App extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.state = {
      projects: [
        {
          id: uuid.v4(),
          title: 'Dating App',
          category: 'Front-End'
        },
        {
          id: uuid.v4(),
          title: 'School CRM',
          category: 'Full-Stack'
        },
        {
          id: uuid.v4(),
          title: 'ECommerce',
          category: 'React-Redux'
        }
      ]
    }
  }

  handleAddProject(p) {
    let projects = this.state.projects;

    projects.push(p);

    this.setState({projects: projects})
  }

  handleDeleteProject(id) {
    let projects= this.state.projects;
    let index = projects.findIndex(x => x.id === id);

    projects.splice(index, 1);

    this.setState ({
      projects: projects
    })

  }

  render() {
    return (
      <div>
        <Project projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <AddProject addProject={this.handleAddProject.bind(this)} />
      </div>
    );
  }
}

export default App;
