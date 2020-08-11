import React from "react";
import Show from "./Show";

class Todo extends React.Component {
  state = {
    task: "",
    taskArray: [],
    id: 0
  };

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  saveChange = (event) => {
    event.preventDefault();
    this.setState({
      taskArray: [
        ...this.state.taskArray,
        { task: this.state.task, id: this.state.taskArray.length + 1 }
      ],
      task: ""
    });
  };

  deleteTask = (id) => {
    const taskArrTemp = this.state.taskArray.filter((task) => task.id !== id);
    this.setState({
      taskArray: taskArrTemp
    });
  };
  render() {
    console.log(this.state.taskArray);
    return (
      <div>
        <h1>Todo tasks</h1>
        <form onSubmit={this.saveChange}>
          <input
            type="text"
            placeholder="enter task"
            onChange={this.handleChange}
            value={this.state.task}
          ></input>
          <button type="submit">Add Task</button>
          <Show list={this.state.taskArray} delete={this.deleteTask}></Show>
        </form>
      </div>
    );
  }
}

export default Todo;
