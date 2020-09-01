import React from "react";
import { connect } from "react-redux";
// import { deleteSmurfs } from "./App";
import { fetchSmurf, deleteSmurfs } from "../actions/action";

const Smurf = (props) => {
  console.log("this is props", props);
  return (
    <div>
      <div>
        <h1> {props.smurf.name} </h1>
        <p> {props.smurf.age} </p>
        <p> {props.smurf.height} </p>
        <button
          onClick={() => {
            props.deleteSmurfs(props.smurf.id);
          }}
        >
          Delete Smurf
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    key: state.smurfs.id,
  };
};

export default connect(mapStateToProps, { deleteSmurfs })(Smurf);

//-------------------------------------DELETE SMURF BY ID-----------------------
// import React from "react";
// import { connect } from "react-redux";

// const AddedFeature = (props) => {
//   return (
//     <li>
//       <button
//         className="button"
//         onClick={() => {
//           props.addSmurf(props.feature.id);
//         }}
//       >
//         X
//       </button>
//       {props.feature.name}
//     </li>
//   );
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeFeature: (featureIdToRemove) =>
//       dispatch({
//         type: "REMOVE_FEATURE",
//         payload: featureIdToRemove,
//       }),
//   };
// };

// export default connect(null, mapDispatchToProps)(AddedFeature);
