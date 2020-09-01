import axios from "axios";

// export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
// export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';

export const fetchSmurf = () => (dispatch) => {
  dispatch({ type: "FETCHING_SMURF_START" });
  axios
    .get("http://localhost:3333/smurfs")
    .then((response) => {
      console.log("fetching Smurf", response);
      dispatch({
        type: "FETCHING_SMURF_SUCCESS",
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log("error fetching", error);
    });
};

export const addSmurfs = (data) => (dispatch) => {
  axios
    .post("http://localhost:3333/smurfs", data)
    .then((response) => {
      console.log("smurf added", response);
      dispatch({
        type: "ADD_SMURF",
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log("error adding", error);
    });
};

export const deleteSmurfs = (id) => (dispatch) => {
  axios.delete(`http://localhost:3333/smurfs/${id}`).then((response) => {
    dispatch({
      type: "DELETE_SMURF",
      payload: response.data,
    });
  });
};
