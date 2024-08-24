import { useEffect, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaUser, FaUnlock, FaGoogle } from "react-icons/fa";
import { checkEmail } from "../helper/Validate";
import { RegisterService } from "../Service/AuthService";
import Input from "../Components/Input";
import toast, { Toaster } from "react-hot-toast";
import Button from "../Components/Button";
import LoginLayout from "../Components/layouts/LoginLayout";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      console.log("-- User have already Logged In --");
      navigate("/");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = async () => {
    let tempErrors = {};

    if (!formData.firstName) {
      tempErrors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      tempErrors.lastName = "Last name is required";
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (await checkEmail(formData.email)) {
      tempErrors.email = "Email is invalid";
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await validate()) {
      await RegisterService(formData).then((res) => {
        console.log(res.response);
        if (res.code === "ERR_BAD_REQUEST") {
          toast.error(res.response.data.message);
        } else if (res.status) {
          toast.success(res.data.message);
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      });
    }
  };

  return (
    <>
      <Toaster />
      <LoginLayout
        goToPage="Already have an account? "
        goToPageShort="Signin"
        goToPageShortLink="/login"
      >
        <div className="signin-form">
          <h2 className="form-title">Sign Up</h2>
          <form
            className="register-form"
            id="login-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="firstName">
                <FaUser />
              </label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                className={`${errors.firstName && "error-input"}`}
              />
            </div>
            {errors.firstName && (
              <span className="error-msg">{errors.firstName}</span>
            )}

            <div className="form-group">
              <label htmlFor="lastName">
                <FaUser />
              </label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleChange}
                className={`${errors.lastName && "error-input"}`}
              />
            </div>
            {errors.lastName && (
              <span className="error-msg">{errors.lastName}</span>
            )}

            <div className="form-group">
              <label htmlFor="email">
                <IoMdMail />
              </label>
              <Input
                type="text"
                name="email"
                id="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className={`${errors.email && "error-input"}`}
              />
            </div>
            {errors.email && <span className="error-msg">{errors.email}</span>}

            <div className="form-group">
              <label htmlFor="password">
                <FaUnlock />
              </label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password *"
                value={formData.password}
                onChange={handleChange}
                className={`${errors.password && "error-input"}`}
              />
            </div>
            {errors.password && (
              <span className="error-msg">{errors.password}</span>
            )}

            <div className="form-group">
              <label htmlFor="confirmpassword">
                <FaUnlock />
              </label>
              <Input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Confirm password *"
                value={formData.confirmpassword}
                onChange={handleChange}
                className={`${errors.confirmpassword && "error-input"}`}
              />
            </div>
            {errors.confirmpassword && (
              <span className="error-msg">{errors.confirmpassword}</span>
            )}

            <div className="form-group form-button">
              <Button name="Sign Up" />
            </div>
          </form>

          <div className="social-login social-login-register">
            <span className="social-label">Or login with Google</span>
            <ul className="socials">
              <li>
                <a href="#/">
                  <i className="display-flex-center google-icon">
                    <FaGoogle />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </LoginLayout>
    </>
  );
};

export default RegisterForm;
