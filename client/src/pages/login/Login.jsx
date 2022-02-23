import { useRef, useContext } from 'react';
import './login.css'
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import {CircularProgress} from "@material-ui/core";
export default function Login() {

    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email : email.current.value, password : password.current.value}, dispatch);
    }
    console.log(user);
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">OverHere Social</h3>
                    <span className="loginDesc">
                        Connect with friends around the world with OverHere Social
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="Email" className="loginInput" ref = {email} required/>
                        <input placeholder="Password" type="Password" className="loginInput" ref = {password} minLength={6} required/>
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {isFetching ? <CircularProgress color="white" size="20px"/> : "Log In"}
                        </button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton" disabled={isFetching}>
                        {isFetching ? <CircularProgress color="white" size="20px"/> : "Create a New Account"}
                        </button>
                    </form>
                </div>
            </div>
            </div>
    )
}
