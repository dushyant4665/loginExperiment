import React from "react";
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${styles.button} ${props.className}`}>
      {props.children}
    </button>
    );
};
export default Button;
