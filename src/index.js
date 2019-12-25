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

//Component to render the entire app
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      taskList: Array(3).fill('Tasks'),
    };
  }
  clickHandler=()=>{
    let newTask = document.getElementById('newTask').value;
    let copyTaskList = this.state.taskList.slice();
    copyTaskList.push(newTask);
    this.setState({taskList:copyTaskList});
  }
  render(){
    return(
      <div className="app">
        <h1>Welcome</h1>
        <form>
          <input type="text"
          name="taskName"
          placeholder="Enter new task here"
          id="newTask"></input>
        </form>
        <button onClick={this.clickHandler}>Add</button>
        <br />
        {this.state.taskList.map((item)=>{return <Task task={item} />})}
      </div>
    );
  }
}
ReactDOM.render(<App />,document.getElementById('root'));
