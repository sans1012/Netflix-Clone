import React,{useEffect} from 'react';
import HomeScreen from "./screens/homeScreen"
import './App.css';
import { BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import {auth} from "./firebase";
import {useDispatch, useSelector} from "react-redux";
import {login, signOut,selectUser} from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";


function App() {
  const user=useSelector(selectUser);
  const dispatch= useDispatch();
  
  useEffect(()=>{
    //listeners
    const unsubscribe= auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //logged In
        dispatch(
          login({
          uid: userAuth.uid,
          email:userAuth.email,
        })
      );
    }
    else{
      dispatch(signOut());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ):(
        <Switch>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
      )}
      </Router>
   </div>
  );
}

export default App;