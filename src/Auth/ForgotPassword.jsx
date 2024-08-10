import { IoMdMail } from "react-icons/io";
import Button from "../Components/Button";
import LoginLayout from "../Components/layouts/LoginLayout";
import { Toaster } from "react-hot-toast";

const ForgotPassword = () => {


    return (
        <>
            <Toaster />
            <LoginLayout
                goToPage="Don't have an account? "
                goToPageShort="Signup"
                goToPageShortLink="/register"
            >
                <div className="signin-form">
                    <h3 className="form-title">Forgot Password</h3>
                    <p className="forgot-p">
                        Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
                    </p>
                    <form className="register-form" id="login-form">
                        <div className="form-group">
                            <label htmlFor="email"><IoMdMail /></label>
                            <input
                                required
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email *"
                            />
                        </div>

                        <div className="form-group form-button">
                            <Button name="Email Password Reset Link" />
                        </div>
                    </form>
                </div>
            </LoginLayout>
        </>
    )
}

export default ForgotPassword;