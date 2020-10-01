import React from 'react';
import './index.css';

 //Component to render each task
 class Task extends React.Component{
   constructor(props){
     super(props);
     this.state={
       //To keep track if task is to be rendered or not
       renderTask: true,
     };
   }
   //Method for when user clicks the remove button
   clickHandler=()=>{
     this.setState({renderTask:false});
   }
   render(){
     if(this.state.renderTask){
       //Render task only if its state value is true
       return(
         <div className="task-item">
          <input type="checkbox" id="task_completion_box" name="task" />
          <div className="task">{this.props.task}</div>
          <button className="cancel" onClick={this.clickHandler}>X</button>
        </div>
      );
    }else{
      //Do not return anything if state value is false
      return null;
    }
   }
 }

export default Task;
