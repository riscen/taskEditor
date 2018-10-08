import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const mapStateToProps = state => {
  console.log("ActionTable: Map state to props");
  return {
    actions: state.actions
  };
};

const ActionTable = props => {
  const actionRows = props.actions.map((action, index) => {
    return (
      <tr key={index}>
        <td className="action-type-cell">{action.type}</td>
        <td className="action-time-cell">{action.time}</td>
        <td className="action-time-cell">{typeof action.payload}</td>
      </tr>
    );
  });
  return (
    <div className="action-table-container">
      <div className="title-container">
        <span className="title">Actions table</span>
      </div>
      <table className="action-table">
        <thead>
          <tr>
            <th className="action-type-cell">Type</th>
            <th className="action-time-cell">Time of execution</th>
            <th className="action-payload-cell">Payload's type</th>
          </tr>
        </thead>
        <tbody>{actionRows}</tbody>
      </table>
    </div>
  );
};

ActionTable.propTypes = {
  actions: PropTypes.array
};

export default connect(mapStateToProps)(ActionTable);
