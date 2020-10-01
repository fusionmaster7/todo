import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task.js';
import {BrowserRouter} from 'react-router-dom';
import './index.css';

//Component to render the entire app
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      taskList: [],
    };
  }
  clickHandler=()=>{
    let newTask = document.getElementById('newTask').value;
    if(newTask===""){
      alert('Please enter a task');
    }else{
      let copyTaskList = this.state.taskList.slice();
      copyTaskList.push(newTask);
      this.setState({taskList:copyTaskList});
    }
  }
  render(){
    return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app">
            <h1>Welcome !</h1>
            <form>
            <input type="text"
            name="taskName"
            placeholder="Enter new task here"
            id="newTask"></input>
            </form>
            <br />
            <button className="add" onClick={this.clickHandler}>Add New Task</button>
            {this.state.taskList.map((item)=>{return <Task task={item} />})}
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
