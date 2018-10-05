import React, { Component } from "react";
import TaskForm from "./TaskForm";
import TaskTable from "./TaskTable";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="title-container">
          <span>Tasks editor</span>
        </div>
        <div className="app-content">
          <TaskForm />
          <TaskTable />
        </div>
      </div>
    );
  }
}

export default App;
