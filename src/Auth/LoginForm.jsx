import { useEffect } from "react"
import Input from "../Components/Input"

const LoginForm = ({
    handleLogin, FaUser, FaUnlock, FaGoogle, Button, setEmail, setPass, handleForgotPass,
    email, pass
}) => {


    useEffect(() => {
        //
    },  [])

    return (
        <>
            <div className="signin-form">
                <h2 className="form-title">Sign In</h2>
                <form className="register-form" id="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="useremail"><FaUser /></label>
                        <Input
                            required={true}
                            type="email"
                            name="useremail"
                            id="useremail"
                            placeholder="User Name *"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"><FaUnlock /></label>
                        <Input
                            required={true}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password *"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <span
                            className="label-agree-term forgot-pass"
                            onClick={handleForgotPass}
                        >
                            Forgot Password?
                        </span>
                    </div>

                    <div className="form-group form-button">
                        <Button name="Sign In"/>
                    </div>
                </form>

                <div className="social-login">
                    <span className="social-label">Or login with Google</span>
                    <ul className="socials">
                        <li>
                            <a href="#/"><i className="display-flex-center google-icon"><FaGoogle/></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default LoginForm