import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import axios from "axios";
// import Form from "./Form";
import { reducer } from "../index.js";
import SmurfForm from "./Smurf_Form";
import SmurfList from "./Smurf_List";

// export const addSmurfs = (data) => (dispatch) => {
//   dispatch({
//     type: "ADD_SMURFS",
//     payload: data,
//   });
//   axios
//     .post("http://localhost:3333/smurfs", data)

//     .then((res) => {
//       // console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const deleteSmurfs = (id) => (dispatch) => {
//   dispatch({
//     type: "DELETE_SMURFS",
//     // payload: data,
//   });
//   axios
//     .delete(`http://localhost:3333/smurfs/${id}`)

//     .then((res) => {
//       // console.log(res);
//       dispatch({
//         type: "DELETE_SMURFS",
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const App = ({ smurfs, fetchSmurfs }) => {
  useEffect(() => {
    // useEffect effect is going to run everytime component renders/re-renders
    // when app renders on page, invoke fetchSmurfs function defined in mapDispatchToProps
    // props.fetchSmurfs();
    fetchSmurfs();
    // }, [props.fetchSmurfs]); // dependencies array, effect only runs once at the beginning if array is empty
  }, [fetchSmurfs]);

  return (
    <div className="App">
      <h1>SMURFS! they love Redux</h1>
      {/* {props.smurfs.map((smurf) => ( */}
      {/* {smurfs.map((smurf) => (
        <div key={smurf.id}>
          <p>{smurf.name}</p>
          <p>{smurf.age}</p>
          <p>{smurf.height}</p>
        </div>
      ))} */}
      <SmurfForm />
      <SmurfList />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSmurfs: () => {
      dispatch(() => {
        dispatch({
          type: "FETCH_SMURFS_PENDING",
        });
        axios({
          method: "GET",
          url: "http://localhost:3333/smurfs",
          // data: { smurf: smurf },
        })
          .then((res) => {
            // console.log(res);
            dispatch({
              type: "FETCH_SMURFS_SUCCESS",
              payload: res.data,
            });
          })
          .catch((err) => {
            console.log(err);
            dispatch({
              type: "FETCH_SMURFS_ERROR",
            });
          });
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
