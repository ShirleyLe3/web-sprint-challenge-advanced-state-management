import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurfs } from "../actions/action";

const SmurfForm = (props) => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleChanges = (event) => {
    setSmurf({
      ...smurf,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1> Add a Smurf </h1>
      <form>
        <label> Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleChanges}
          value={smurf.name}
        />
        <label> Age: </label>
        <input
          type="text"
          name="age"
          onChange={handleChanges}
          value={smurf.age}
        />
        <label> Height: </label>
        {/* <input
          type="text"
          name="height"
          onChange={handleChanges}
          value={smurf.height}
        /> */}
        <select
          name="height"
          defaultValue="5cm"
          onChange={handleChanges}
          value={smurf.height}
        >
          <option value="4cm">4cm</option>
          <option value="5cm">5cm</option>
          <option value="6cm">6cm</option>
          <option value="7cm">7cm</option>
        </select>

        <button type="button" onClick={() => props.addSmurfs(smurf)}>
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("this is state", state.smurfs);
  return {
    state: state.smurfs,
  };
};

export default connect(mapStateToProps, { addSmurfs })(SmurfForm);

// const defaultFormState = {
//   name: "",
//   age: "",
//   height: "5cm",
// };

// const defaultErrorState = {
//   name: "",
//   phone: "",
// };

// const Form = (props) => {
//   const [formState, setFormState] = useState(defaultFormState);
// };

// const handleChange = (e) => {
//   if (e.target.type === "checkbox") {
//     setFormState({
//       ...formState,
//       condiments: {
//         ...formState.condiments,
//         [e.target.value]: e.target.checked,
//       },
//     });
//   } else {
//     setFormState({
//       ...formState,
//       [e.target.name]: e.target.value,
//     });
//   }
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(formState);
//   axios
//     .post("https://reqres.in/api/users", formState)
//     .then((res) => props.addOrder(res.data))
//     .catch((err) => console.log(err));
// };

// return (
//   <FormContainer>
//     <form onSubmit={handleSubmit}>
//       <div id="header">
//         <h2>Join the Smurf Community</h2>
//       </div>
//       <div id="Smurf-info">
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             onChange={handleChange}
//             data-cy="name"
//             value={formState.name}
//           />
//           {/* {errors.name.length > 0 && (
//             <p style={{ color: "blue" }}>{errors.name}</p>
//           )} */}
//         </label>
//         <label>
//           Age
//           <input
//             type="tel"
//             name="age"
//             onChange={handleChange}
//             value={formState.age}
//           />
//           {/* {errors.phone.length > 0 && (
//             <p style={{ color: "blue" }}>{errors.phone}</p>
//           )} */}
//         </label>
//         <label>
//           Select Height
//           <select name="height" defaultValue="5cm" onChange={handleChange}>
//             <option value="4cm">4cm</option>
//             <option value="5cm">5cm</option>
//             <option value="6cm">6cm</option>
//             <option value="7cm">7cm</option>
//           </select>
//         </label>
//       </div>

//       <button data-cy="submit-button" onClick={Link} type="submit">
//         Submit Order
//       </button>
//     </form>
//   </FormContainer>
// );
// // };

// export default Form;
