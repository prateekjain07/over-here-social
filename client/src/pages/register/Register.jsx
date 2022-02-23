import './register.css'
import { useRef } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useNavigate();
    const handleClick = async (e) =>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try{
                await axios.post("/auth/register", user);
                history.push("/login");
            }
            catch(err){
                console.log(err);
            }
        }
    }

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
                        <input placeholder="Username" ref={username} className="loginInput" />
                        <input placeholder="Email" ref={email} type="Email" className="loginInput" />
                        <input placeholder="Password" ref={password} type="Password" className="loginInput" minLength={6}/>
                        <input placeholder="Password Again" ref={passwordAgain} type="Password" className="loginInput" />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
            </div>
    )
}
