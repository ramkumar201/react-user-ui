import { IoMdMail } from "react-icons/io";

const ForgotPassword = ({ Button }) => {


    return (
        <>
            <div className="signin-form">
                <h3 className="form-title">Forgot Password</h3>
                <p className="forgot-p">
                    Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
                </p>
                <form className="register-form" id="login-form">
                    <div className="form-group">
                        <label htmlFor="useremail"><IoMdMail /></label>
                        <input
                            required
                            type="email"
                            name="useremail"
                            id="useremail"
                            placeholder="Email *"
                        />
                    </div>

                    <div className="form-group form-button">
                        <Button name="Email Password Reset Link" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default ForgotPassword;