import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Component for rendering each task
class Task extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      task: 'Default Value',
    };
  }
  render(){
    return(
      <div className = "task-item">
        <div className="task">
          {this.state.task}
        </div>
        <button>Cancel</button>
      </div>
    );
  }
}
