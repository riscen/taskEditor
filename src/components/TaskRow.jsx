import React, { Component } from "react";
import Popup from "reactjs-popup";
import { connect } from "react-redux";
import TaskModal from "./TaskModal";
import { selectTask } from "../actions/selectTask";
import { DATE_FORMAT } from "../util/constants";

const mapDispatchtoProps = dispatch => {
  console.log("TaskRow: Map dispatch to props");
  return {
    selectTask: task => dispatch(selectTask(task))
  };
};

class TaskRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick(task) {
    this.setState({
      modalIsOpen: true
    });
    this.props.selectTask(task);
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    const contentStyle = {
      maxWidth: "600px",
      width: "90%"
    };
    const name = this.props.task.taskName;
    return (
      <React.Fragment>
        <React.Fragment>
          <tr
            className={"prior-" + this.props.task.priority + " data-row"}
            onClick={task => this.handleClick(this.props.task)}
          >
            <td>
              {name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()}
            </td>
            <td>{this.props.task.dueDate.format(DATE_FORMAT)}</td>
          </tr>
        </React.Fragment>
        <Popup
          open={this.state.modalIsOpen}
          modal
          contentStyle={contentStyle}
          onClose={this.closeModal}
        >
          <TaskModal close={this.closeModal} />
        </Popup>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  mapDispatchtoProps
)(TaskRow);
