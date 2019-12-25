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
        tasks: [],
      };
    }
    renderTask = (data)=>{
      return <Task taskValue = {data} />;
    }
    render(){
      return(
        <div>
          {this.renderTask('Task 1')}
          {this.state.tasks.map((item)=>this.renderTask(item))}
        </div>
      );
    }
}

//Component to render the actual App.
class App extends React.Component{
  render(){
    return(
      <div className="app">
        <h1>Welcome!</h1>
        <form>
          <input type="text" name="taskName" placeholder="Enter your Task"></input>
          <button>Add</button>
        </form>
        <br />
        <List />
      </div>
    );
  }
}
