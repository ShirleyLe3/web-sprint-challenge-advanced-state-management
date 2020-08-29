import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import axios from "axios";

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
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {/* {props.smurfs.map((smurf) => ( */}
      {smurfs.map((smurf) => (
        <div key={smurf.id}>
          <p>{smurf.name}</p>
          <p>{smurf.age}</p>
          <p>{smurf.height}</p>
        </div>
      ))}
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
{
  /* <FormContainer>
<form onSubmit={handleSubmit}>
  <div id="header">
    <h2>Create Your Pizza!</h2>
  </div>
  <div id="Order-Information">
    <label>
      Name
      <input
        type="text"
        name="name"
        onChange={handleChange}
        data-cy="name"
        value={formState.name}
      />
      {errors.name.length > 0 && (
        <p style={{ color: "red" }}>{errors.name}</p>
      )}
    </label>
    <label>
      Phone Number
      <input
        type="tel"
        name="phone"
        onChange={handleChange}
        data-cy="phone"
        value={formState.phone}
      />
      {errors.phone.length > 0 && (
        <p style={{ color: "red" }}>{errors.phone}</p>
      )}
    </label>
    <label>
      Select Crust
      <select
        name="crust"
        data-cy="crust"
        defaultValue="Original"
        onChange={handleChange}
      >
        <option value="Original">Original</option>
        <option value="Thin">Thin</option>
        <option value="Thick">Thick</option>
        <option value="Stuffed">Stuffed</option>
      </select>
    </label>
  </div>


const defaultFormState = {
  name: "",
  age: "",
  height: {
    4cm: false,
    5cm: false,
    6cm: false
  }
};

const defaultErrorState = {
  name: "",
  phone: "",
};

const Form = (props) => {
  const [formState, setFormState] = useState(defaultFormState);
  const [errors, setErrors] = useState(defaultErrorState);
  const [isDisabled, setIsDisabled] = useState(true);

 */
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
