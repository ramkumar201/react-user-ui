import { Link } from "react-router-dom";

const PageNotFound = () => {

    return (
        <>
            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        {/* <div className="signin-image">
                            <figure>
                                <img src="../images/signin-image.jpg" alt="" />
                            </figure>
                            <Link
                                className="signup-image-link"
                                to='/'
                            >
                                GoTo Home
                            </Link>
                        </div> */}
                        <div>
                            404 Page not fount <br />
                            <Link
                                className="signup-image-link"
                                to='/'
                            >
                                GoTo Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default PageNotFound;