import React, { useContext } from "react";
import AuthContext from "../authContext/AuthContext";
import Button from "../UI/Button";
import styles from './Navigation.module.css';

const Navigation = () => {
  const authCtx = useContext(AuthContext);

  return (
    <ul className={styles.nav}>
      {authCtx.isLoggedIn && (
        <li>
          <a href="/">Services</a>
        </li>
      )}
      {authCtx.isLoggedIn && (
        <Button type="submit" onClick={authCtx.onLogout}>
          Logout
        </Button>
      )}
    </ul>
  );
};
export default Navigation;
