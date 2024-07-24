import React, { useContext } from 'react'
import AuthContext from '../authContext/AuthContext'
import Button from '../UI/Button'
import classes from '../Component/Home.module.css';
import Card from '../UI/Card';

const Home = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Card>
      <div className={classes.home}>
        <h1>Hello, Welcome</h1>
        <Button onClick={authCtx.onLogout}>Logout</Button>
      </div>
    </Card>
  )
}
export default Home