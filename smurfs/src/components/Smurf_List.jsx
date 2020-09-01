import React from "react";
import { connect } from "react-redux";

// import { fetchSmurfs,
import { deleteSmurfs } from "../actions/action";
import Smurf from "./Smurf";

//   onClick={() => {
//     props.findSmurfByName(props.feature.id);
//   }}
// >
//   X
// </button>
// {props.feature.name}

const SmurfList = (props) => {
  console.log("SmurfList Props", props);
  return (
    <div>
      {props.data.map((item) => (
        <Smurf smurf={item} />
      ))}
      {/* <button variant="contained" onClick={props.fetchSmurfs}>
        {" "}
        Get A Smurf{" "}
      </button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("this is state,", state.smurf);
  return {
    data: state.smurfs,
  };
};

export default connect(mapStateToProps, { deleteSmurfs })(SmurfList);
