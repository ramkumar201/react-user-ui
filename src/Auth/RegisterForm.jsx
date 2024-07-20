import { useEffect, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { checkEmail } from "../helper/Validate";
import { RegisterService } from "../Service/AuthService";
import Input from "../Components/Input";

const RegisterForm = ({
    FaUser, FaUnlock, FaGoogle, Button
}) => {

    const [formData, setFormData] = useState({
        name: '',
        useremail: '',
        password: '',
        confirmpassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const validate = async () => {
        let tempErrors = {};

        if (!formData.name) {
            tempErrors.name = "Name is required";
        }

        if (!formData.useremail) {
            tempErrors.useremail = "Email is required";
        } else if (await checkEmail(formData.useremail)) {
            tempErrors.useremail = "Email is invalid";
        }

        if (!formData.password) {
            tempErrors.password = "Password is required";
        }
        if (!formData.confirmpassword) {
            tempErrors.confirmpassword = "Confirm Password is required";
        }

        if (formData.password !== formData.confirmpassword) {
            tempErrors.confirmpassword = "Confirm passwrord is mismatch";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (await validate()) {
            console.log(' Form Data -- ', formData)
            const res = await RegisterService(formData);
            console.log(res);
        }
    }

    useEffect(() => {
        //
    }, [])


    return (
        <div className="signin-form">
            <h2 className="form-title">Sign Up</h2>
            <form className="register-form" id="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name"><FaUser /></label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name *"
                        value={formData.name}
                        onChange={handleChange}
                        className={`${errors.name && 'error-input'}`}
                    />
                </div>
                {errors.name && <span className="error-msg">{errors.name}</span>}

                <div className="form-group">
                    <label htmlFor="useremail"><IoMdMail /></label>
                    <Input
                       type="text"
                       name="useremail"
                       id="useremail"
                       placeholder="Email *"
                       value={formData.useremail}
                       onChange={handleChange}
                       className={`${errors.useremail && 'error-input'}`}
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
                       onChange={handleChange}
                       className={`${errors.password && 'error-input'}`}
                    />
                </div>
                {errors.password && <span className="error-msg">{errors.password}</span>}

                <div className="form-group">
                    <label htmlFor="confirmpassword"><FaUnlock /></label>
                    <Input
                       type="password"
                       name="confirmpassword"
                       id="confirmpassword"
                       placeholder="Confirm password *"
                       value={formData.confirmpassword}
                       onChange={handleChange}
                       className={`${errors.confirmpassword && 'error-input'}`}
                    />
                </div>
                {errors.confirmpassword && <span className="error-msg">{errors.confirmpassword}</span>}

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