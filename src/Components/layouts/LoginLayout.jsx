import { Link } from "react-router-dom";

const LoginLayout = ({
    goToPage = '', goToPageShort = '', goToPageShortLink = '',  children
}) => {


    return (
        <>
            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure>
                                <img src="../images/signin-image.jpg" alt="" />
                            </figure>
                            { goToPage }
                            <Link
                                className="signup-image-link"
                                to={goToPageShortLink}
                            >
                                { goToPageShort }
                            </Link>
                        </div>
                        {children}
                    </div>
                </div>
            </section>
        </>
    )
}


export default LoginLayout