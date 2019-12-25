import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Component to render each task
class Task extends React.Component{
  render(){
    return(
      <div className="task-item">
        <div className="task">{this.props.task}</div>
        <button className="cancel">Cancel</button>
      </div>
    );
  }
}

//Component to render a list made up of tasks
class List extends React.Component{
  render(){
    return(
      <div>
        <Task task="Task 1" />
        <Task task="Task 2" />
        <Task task="Task 3" />
      </div>
    );
  }
}

ReactDOM.render(<List />,document.getElementById('root'));
