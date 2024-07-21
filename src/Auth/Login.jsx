import { useEffect, useState } from "react";
import { FaUser, FaUnlock, FaGoogle } from "react-icons/fa";
import '../css/Login.css';
import Button from "../Components/Button";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPassword from "./ForgotPassword";
import { Toaster } from "react-hot-toast";


const Login = () => {

    const [isLogin, setisLogin] = useState(true)
    const [isReg, setisReg] = useState(false)
    const [isForgot, setisForget] = useState(false)

    useEffect(() => {
        //
    }, [])

    const handleForgotPass = () => {
        handleChangeCom('forgot')
    }

    const handleChangeCom = (type) => {
        if (type === 'login') {
            setisReg(false)
            setisForget(false)
            setisLogin(true)
        } else if (type === 'reg') {
            setisLogin(false)
            setisForget(false)
            setisReg(true)
        } else if (type === 'forgot') {
            setisReg(false)
            setisLogin(false)
            setisForget(true)
        }
    }

    return (
        <>
            <Toaster />
            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure><img src="../images/signin-image.jpg" alt="" /></figure>
                            { isLogin && "Don't have an account? " }
                            { (isReg || isForgot) && "Already have an account? " }
                            <span 
                                href="#/"
                                onClick={() =>
                                    handleChangeCom(isLogin ? 'reg' : ((isReg || isForgot) && 'login'))
                                }
                                className="signup-image-link"
                            >
                                { isLogin && 'Signup' }
                                { (isReg || isForgot) && 'Signin' }
                            </span>
                        </div>
                        { isLogin && <LoginForm
                                FaUser={FaUser}
                                FaUnlock={FaUnlock}
                                FaGoogle={FaGoogle}
                                Button={Button}
                                handleForgotPass={handleForgotPass}
                            />
                        }
                        { isReg && <RegisterForm
                                FaUser={FaUser}
                                FaUnlock={FaUnlock}
                                FaGoogle={FaGoogle}
                                Button={Button}
                            />
                        }
                        { isForgot && <ForgotPassword 
                            Button={Button}
                        />}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login