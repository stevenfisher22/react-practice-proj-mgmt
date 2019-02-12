import React from 'react';

class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    handleDelete(id){
        this.props.onDelete(id)
    }

    render() {
        
        return (
            <li>
                <strong>{this.props.project.category}: </strong>
                {this.props.project.title} 

                <a href="#" onClick={this.handleDelete.bind(this, this.props.project.id)}>X</a>
            </li>
        );
    }
}

export default ProjectItem
