import { useEffect, useState } from "react";
import { FaUser, FaUnlock, FaGoogle } from "react-icons/fa";
import '../css/Login.css';
import Button from "../Components/Button";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import AuthService from "../Service/AuthService";
import ForgotPassword from "./ForgotPassword";


const Login = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [repass, setRePass] = useState('')
    const [isLogin, setisLogin] = useState(true)
    const [isReg, setisReg] = useState(false)
    const [isForgot, setisForget] = useState(false)

    useEffect(() => {
        //
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault();
        const postData = { email, pass }

        const res = await AuthService.LoginService(postData);
        console.log(res);
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const postData = { name, email, pass, repass }

        const res = await AuthService.RegisterService(postData);
        console.log(res);
    }

    const handleForgotPass = (e) => {
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
                                handleLogin={handleLogin}
                                FaUser={FaUser}
                                FaUnlock={FaUnlock}
                                FaGoogle={FaGoogle}
                                Button={Button}
                                email={email}
                                setEmail={setEmail}
                                pass={pass}
                                setPass={setPass}
                                handleForgotPass={handleForgotPass}
                            />
                        }
                        { isReg && <RegisterForm
                                handleRegister={handleRegister}
                                FaUser={FaUser}
                                FaUnlock={FaUnlock}
                                FaGoogle={FaGoogle}
                                Button={Button}
                                name={name}
                                setName={setName}
                                email={email}
                                setEmail={setEmail}
                                pass={pass}
                                setPass={setPass}
                                repass={repass}
                                setRePass={setRePass}
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