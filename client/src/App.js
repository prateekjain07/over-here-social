import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Profile from './pages/profile/Profile.jsx';
import Register from './pages/register/Register.jsx';
import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes, //Routes instead of Switch
    Navigate //Navigate instead of Redirect in new V6
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
  

function App() {
    const { user } = useContext(AuthContext);
    return (
        <Router>
        <Routes>
          <Route exact path="/"
            element = {user ? <Home /> : <Register />}/>
          <Route path="/login" element = { user ? <Navigate to="/"/> : <Login />}/>
          <Route path="/register" element ={user ? <Navigate to="/" /> : <Register />}/>
          <Route path="/profile/:username" element={<Profile />}/>
        </Routes>
      </Router>
    );
}

export default App;