import React, { useState, useReducer, useContext, useEffect } from "react";
import AuthContext from "../authContext/AuthContext";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Login.module.css";

const emailReducer = (state, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return { value: action.val, isValid: action.val.includes("@") };
    case "INPUT_BLUR":
      return { value: state.value, isValid: state.value.includes("@") };
    default:
      return { value: "", isValid: false };
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return { value: action.val, isValid: action.val.length > 6 };
    case "INPUT_BLUR":
      return { value: state.value, isValid: state.value.length > 6 };
    default:
      return { value: "", isValid: false };
  }
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const authCtx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    let formValidity = setTimeout(() => {
      console.log("entered");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("cleared");
      clearTimeout(formValidity);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailHandler = (e) => {
    dispatchEmail({ type: "USER_INPUT", val: e.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const passwordHandler = (e) => {
    dispatchPassword({ type: "USER_INPUT", val: e.target.value });
  };

  const sumbitHandler = (e) => {
    e.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card>
      <form onSubmit={sumbitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            onChange={emailHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={passwordHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <Button type="submit" disabled={!formIsValid}>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
