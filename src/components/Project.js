import React from 'react';
import ProjectItem from './ProjectItem';

class Project extends React.Component {
    constructor(props) {
        super(props);
        
    }

    deleteProject (id) {
        this.props.onDelete(id)
    }

    render() {
        let projectItems;

        if(this.props.projects) {
            projectItems = this.props.projects.map(project => {
                return(
                    <ProjectItem project={project} onDelete={this.deleteProject.bind(this)}/>
                )
            })
        }


        return (
            <div>
                <ul>
                    {projectItems}
                </ul>
            </div>
        );
    }
}

export default Project
