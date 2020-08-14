import React from "react";
import Show from "./Show";

class Todo extends React.Component {
  state = {
    task: "",
    taskArray: [],
    id: 0,
    isEditing: false,
    editId: ""
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

  setUpEditTodo = (id) => {
    const todo = this.state.taskArray.find((task) => task.id === id);
    this.setState({
      isEditing: true,
      editId: id,
      task: todo.value
    });
  };

  editTodo = (event) => {
    event.preventDefault();
    const tempArray = this.state.taskArray;
    const index = this.state.taskArray.findIndex(
      (task) => task.taskId === this.state.editId
    );

    tempArray[index] = { ...tempArray[index], value: this.state.value };

    this.setState({
      taskArray: tempArray,
      isEditing: false,
      task: ""
    });
  };
  render() {
    console.log(this.state.taskArray);
    return (
      <div>
        <h1>Todo tasks</h1>
        <form onSubmit={this.isEditing ? this.editTodo : this.saveChange}>
          <input
            type="text"
            placeholder="enter task"
            onChange={this.handleChange}
            value={this.state.task}
          ></input>
          <button type="submit">Add Task</button>
          <Show
            list={this.state.taskArray}
            delete={this.deleteTask}
            edit={this.setUpEditTodo}
          ></Show>
        </form>
      </div>
    );
  }
}

export default Todo;
