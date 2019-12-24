import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Component to render Tasks.
class Task extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      task: null,
    }
  }
  static getDerivedStateFromProps(props,state){
    return {task:props.taskValue};
  }
  render(){
    return(
      <div className="task-item">
        <div className="task">
          {this.state.task}
        </div>
        <button>Cancel</button>
      </div>
    );
  }
}

//Component to render a List composed of tasks.
class List extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        tasks: Array(3).fill('Default'),
      };
    }
    renderTask = (data)=>{
      return <Task taskValue = {data} />;
    }
    render(){
      return(
        <div>
          {this.renderTask('Task 1')}
          {this.renderTask('Task 2')}
        </div>
      );
    }
}

ReactDOM.render(<List />,document.getElementById('root'));
