import React from "react";
import DatePicker from "react-datepicker";

class GetDate extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="date-picker">
        <span>{this.props.text}</span>
        <DatePicker selected={this.state.date} onChange={this.handleChange} />
      </div>
    );
  }
}

export default GetDate;
