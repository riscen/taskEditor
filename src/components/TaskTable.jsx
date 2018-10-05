import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { selectTask } from "../actions/selectTask";
import TaskRow from "./TaskRow";

const mapDispatchToProps = dispatch => {
  console.log("TaskTable: Map dispatch to props");
  return {
    selectTask: task => dispatch(selectTask(task))
  };
};

const mapStateToProps = state => {
  console.log("TaskTable: Map state to props");
  return {
    tasks: state.tasks
  };
};

class TaskTable extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let dataRows;
    if (this.props.tasks) {
      dataRows = this.props.tasks.map((item, index) => {
        return <TaskRow key={index} index={index} task={item} />;
      });
    }
    return (
      <div className="table-container">
        <div className="title-container">
          <span className="title">Task table</span>
        </div>
        <table className="task-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Due date</th>
            </tr>
          </thead>
          <tbody>{dataRows}</tbody>
        </table>
      </div>
    );
  }
}

TaskTable.propTypes = {
  tasks: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskTable);
