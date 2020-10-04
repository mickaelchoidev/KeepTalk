import React from "react";
import { auth, provider } from "../config/firebase";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";

import Button from "@material-ui/core/Button";

import "./Login.css";

function Login() {
  const [{}, dispatch] = useStateValue();

  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>KeepTalk</h1>
        <div className="login__text">
          <h2>Login to KeepTalk</h2>
        </div>
        <Button type="submit" onClick={login}>
          Login with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
