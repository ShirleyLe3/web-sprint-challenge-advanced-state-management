import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
// import { ADD_SMURF, DELETE_SMURF } from "./actions/action";

const initialState = {
  smurfs: [],
  isLoading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SMURFS_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_SMURFS_SUCCESS":
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
      };
    case "ADD_SMURF":
      //   const smurf = { ...action.payload };      //  returns all but we need only the added
      return {
        ...state,
        smurfs:
          // ...state.smurfs, smurf],
          action.payload,
      };
    case "DELETE_SMURF":
      return {
        smurfs: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
