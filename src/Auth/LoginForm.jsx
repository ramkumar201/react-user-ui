import { useEffect, useState } from "react"
import Input from "../Components/Input"
import { checkEmail } from "../helper/Validate";
import { LoginService } from "../Service/AuthService";

const LoginForm = ({
    FaUser, FaUnlock, FaGoogle, Button, handleForgotPass
}) => {


    useEffect(() => {
        //
    },  [])

    const [formData, setFormData] = useState({
        useremail: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = async () => {
        let tempErrors = {};

        if (! formData.useremail) {
            tempErrors.useremail = "Email is required";
        } else if (await checkEmail(formData.useremail)) {
            tempErrors.useremail = "Email is invalid";
        }
        if (! formData.password) {
            tempErrors.password = "Password is required";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(await validate()) {
            console.log('Form Data --- ', formData);
            const res = await LoginService(formData);
            console.log(res);
        }
    }

    return (
        <>
            <div className="signin-form">
                <h2 className="form-title">Sign In</h2>
                <form className="register-form" id="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="useremail"><FaUser /></label>
                        <Input
                            type="text"
                            name="useremail"
                            id="useremail"
                            placeholder="Email *"
                            value={formData.useremail}
                            className={`${errors.useremail && 'error-input'}`}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.useremail && <span className="error-msg">{errors.useremail}</span>}

                    <div className="form-group">
                        <label htmlFor="password"><FaUnlock /></label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password *"
                            value={formData.password}
                            className={`${errors.password && 'error-input'}`}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.password && <span className="error-msg">{errors.password}</span>}

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