import { useEffect } from "react";
import { IoMdMail } from "react-icons/io";

const RegisterForm = ({
    handleRegister, FaUser, FaUnlock, FaGoogle, Button, setName, setEmail, setPass, setRePass,
    name, email, pass, repass
}) => {

    useEffect(() => {
        //
    }, [])


    return (
        <div className="signin-form">
            <h2 className="form-title">Sign Up</h2>
            <form className="register-form" id="login-form" onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="name"><FaUser /></label>
                    <input
                        required
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="useremail"><IoMdMail /></label>
                    <input
                        required
                        type="email"
                        name="useremail"
                        id="useremail"
                        placeholder="Email *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password"><FaUnlock /></label>
                    <input
                        required
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password *"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="repassword"><FaUnlock /></label>
                    <input
                        required
                        type="password"
                        name="repassword"
                        id="repassword"
                        placeholder="Re-Password *"
                        value={repass}
                        onChange={(e) => setRePass(e.target.value)}
                    />
                </div>

                <div className="form-group form-button">
                    <Button name="Sign Up"/>
                </div>
            </form>

            <div className="social-login social-login-register">
                <span className="social-label">Or login with Google</span>
                <ul className="socials">
                    <li>
                        <a href="#/"><i className="display-flex-center google-icon"><FaGoogle/></i></a>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default RegisterForm