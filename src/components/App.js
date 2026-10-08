import React from "react";
import { connect } from "react-redux";
import "./../styles/App.css";

import {
  updateName,
  updateEmail
} from "../actions/userActions";

const App = props => {
  return (
    <div>
      <h1>User Information</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={props.name}
        onChange={e => props.updateName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={props.email}
        onChange={e => props.updateEmail(e.target.value)}
      />

      <div className="output">
        <p>Name - {props.name}</p>
        <p>Email - {props.email}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  name: state.name,
  email: state.email
});

const mapDispatchToProps = {
  updateName,
  updateEmail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);