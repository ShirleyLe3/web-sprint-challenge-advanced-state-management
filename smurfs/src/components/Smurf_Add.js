import React from "react";
import { connect } from "react-redux";

const AddedFeature = (props) => {
  return (
    <li>
      <button
        className="button"
        onClick={() => {
          props.addSmurf(props.feature.id);
        }}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFeature: (featureIdToRemove) =>
      dispatch({
        type: "REMOVE_FEATURE",
        payload: featureIdToRemove,
      }),
  };
};

export default connect(null, mapDispatchToProps)(AddedFeature);
