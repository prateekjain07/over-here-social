import './register.css'

export default function Register() {
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
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" type="Email" className="loginInput" />
                        <input placeholder="Password" type="Password" className="loginInput" />
                        <input placeholder="Password Again" type="Password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
            </div>
    )
}
