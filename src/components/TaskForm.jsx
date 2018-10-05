import React, { Component } from "react";
import { connect } from "react-redux";
import cuid from "cuid";
import DatePicker from "react-datepicker";
import NumpericInput from "react-numeric-input";
import moment from "moment";
import PropTypes from "prop-types";

import { addTask } from "../actions/addTask";
import { DATE_FORMAT } from "../util/constants";

import "react-datepicker/dist/react-datepicker.css";

const mapStateToProps = state => {
  console.log("TaskForm: Map state to props");
  return {
    currentId: state.currentId
  };
};

const mapDispatchtoProps = dispatch => {
  console.log("TaskForm: Map dispatch to props");
  return {
    addTask: task => dispatch(addTask(task))
  };
};

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: "",
      taskDescription: "",
      startDate: moment(),
      dueDate: moment(),
      priority: 1
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleNumericValue = this.handleNumericValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.taskName === "") {
      alert("The task's name cannot be empty");
    } else {
      this.props.addTask({
        taskId: cuid(),
        ...this.state
      });
      this.clearFields();
    }
  }

  handleDateChange(date) {
    this.setState({
      dueDate: date
    });
  }

  handleNumericValue(value) {
    this.setState({
      priority: value
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  clearFields() {
    this.setState({
      taskName: "",
      taskDescription: "",
      startDate: moment(),
      priority: 1
    });
  }

  render() {
    return (
      <div className="form-container">
        <div className="title-container">
          <span className="title">Task info</span>
        </div>
        <form onSubmit={this.handleSubmit}>
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
          <div className="form-field">
            <label className="input-label">Due date: </label>
            <DatePicker
              className="input-field"
              name="dueDate"
              selected={this.state.dueDate}
              minDate={moment()}
              onChange={this.handleDateChange}
              dateFormat={DATE_FORMAT}
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
              onChange={this.handleNumericValue}
            />
          </div>
          <div className="submit-btn">
            <input className="btn" type="submit" value="Add task" />
          </div>
        </form>
      </div>
    );
  }
}

TaskForm.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(TaskForm);
