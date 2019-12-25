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
      tasks: Array(3).fill('Tasks'),
    };
  }
  render(){
    return(
      <div>
        {this.state.tasks.map((item)=>{return <Task task={item} />})}
      </div>
    );
  }
}
ReactDOM.render(<App />,document.getElementById('root'));
