import { useEffect, useState } from "react"
import Input from "../Components/Input"
import { checkEmail } from "../helper/Validate";
import { LoginService } from "../Service/AuthService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const LoginForm = ({
    FaUser, FaUnlock, FaGoogle, Button, handleForgotPass
}) => {


    useEffect(() => {
        //
    },  [])

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = async () => {
        let tempErrors = {};

        if (! formData.email) {
            tempErrors.email = "Email is required";
        } else if (await checkEmail(formData.email)) {
            tempErrors.email = "Email is invalid";
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
            await LoginService(formData).then((res) => {
                console.log('Login Return -- ', res);
                if (res.code === "ERR_BAD_REQUEST") {
                    toast.error(res.response.data.message)
                } else if (res.status) {
                    toast.success(res.data.message)
                    setTimeout(() => {
                        navigate('/')
                    }, 2000)
                }
            });
        }
    }

    return (
        <>
            <div className="signin-form">
                <h2 className="form-title">Sign In</h2>
                <form className="register-form" id="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email"><FaUser /></label>
                        <Input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email *"
                            value={formData.email}
                            className={`${errors.email && 'error-input'}`}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.email && <span className="error-msg">{errors.email}</span>}

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