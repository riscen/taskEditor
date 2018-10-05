import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
import DatePicker from "react-datepicker";
import NumpericInput from "react-numeric-input";
import { updateTask } from "../actions/updateTask";
import { removeTask } from "../actions/removeTask";
import { DATE_FORMAT } from "../util/constants";

const mapStateToProps = state => {
  console.log("TaskModal: Map state to props");
  return {
    task: state.selectedTask
  };
};

const mapDispatchToProps = dispatch => {
  console.log("TaskModal: Map dispatch to props");
  return {
    updateTask: task => dispatch(updateTask(task)),
    removeTask: taskId => dispatch(removeTask(taskId))
  };
};

class TaskModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: this.props.task.taskName,
      taskDescription: this.props.task.taskDescription,
      startDate: this.props.task.startDate,
      dueDate: this.props.task.dueDate,
      priority: this.props.task.priority,
      update: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleNumericChange = this.handleNumericChange.bind(this);
    this.handleClickRemoveTask = this.handleClickRemoveTask.bind(this);
    this.handleClickUpdateTask = this.handleClickUpdateTask.bind(this);
  }

  handleNumericChange(value) {
    this.setState({
      priority: value,
      update: true
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      update: true
    });
  }

  handleDateChange(date) {
    this.setState({
      dueDate: date,
      update: true
    });
  }

  handleClickRemoveTask() {
    this.props.removeTask(this.props.task.taskId);
    this.props.close();
  }

  handleClickUpdateTask() {
    if (this.state.update)
      this.props.updateTask({
        taskId: this.props.task.taskId,
        taskName: this.state.taskName,
        taskDescription: this.state.taskDescription,
        startDate: moment(),
        dueDate: this.state.dueDate,
        priority: this.state.priority
      });
    this.props.close();
  }

  render() {
    const name = this.state.taskName;

    return (
      <div className="modal">
        <div className={"header prior-" + this.state.priority}>
          <label>
            {name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()}
          </label>
        </div>
        <div className="content">
          <form>
            <div className="form-field">
              <label className="input-label">Name: </label>
              <input
                name="taskName"
                className="input-field"
                type="text"
                placeholder="Task's name"
                value={this.state.taskName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-field">
              <label className="input-label">Description: </label>
              <textarea
                name="taskDescription"
                className="input-field"
                type="text"
                placeholder="Task's description"
                value={this.state.taskDescription}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-field inline">
              <label className="input-label">Start date: </label>
              <input
                name="taskName"
                className="input-field"
                type="text"
                placeholder="Task's name"
                value={this.state.startDate.format(DATE_FORMAT)}
                disabled
              />
            </div>
            <div className="form-field inline">
              <label className="input-label">Due date: </label>
              <DatePicker
                className="input-field"
                name="dueDate"
                selected={this.state.dueDate}
                minDate={moment()}
                dateFormat={DATE_FORMAT}
                onChange={this.handleDateChange}
              />
            </div>
            <div className="form-field">
              <label className="input-label">Priority: </label>
              <NumpericInput
                className="input-field"
                name="priority"
                min={1}
                max={3}
                value={this.state.priority}
                onChange={this.handleNumericChange}
              />
            </div>
            <div className="center">
              <div className="submit-btn inline">
                <input
                  className="btn update-btn"
                  type="submit"
                  name="update-task"
                  value="Update task"
                  onClick={this.handleClickUpdateTask}
                />
              </div>
              <div className="submit-btn inline">
                <input
                  className="btn remove-btn"
                  type="submit"
                  name="remove-task"
                  value="Remove task"
                  onClick={this.handleClickRemoveTask}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

TaskModal.propTypes = {
  task: PropTypes.object,
  updateTask: PropTypes.func,
  close: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskModal);
