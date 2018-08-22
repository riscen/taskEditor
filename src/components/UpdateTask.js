import React from "react";
import GetDate from "./GetDate";

class UpdateTask extends React.Component {
  render() {
    return (
      <div id="update-task">
        <span>Name: </span>
        <input ref="name-input" placeholder="Taks's name" />
        <br />
        <span>Description: </span>
        <br />
        <textarea ref="task-input" placeholder="Task's description" rows="4" />
        <br />
        <GetDate text="Initial date:" />
        <br />
        <GetDate text="Finish date:" />
      </div>
    );
  }
}

export default UpdateTask;
