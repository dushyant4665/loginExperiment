import './App.css';
import Navigation from './Component/Navigation';
import Login from './Component/Login'
import Home from './Component/Home';
import { useContext} from 'react';
import AuthContext from './authContext/AuthContext';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <>
    <Navigation />
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && <Home />}
    </>
  );
}

export default App;
