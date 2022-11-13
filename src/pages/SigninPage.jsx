import React from "react";
import Signin from "../components/Signin/Signin";
import Footer from "../components/Footer/Footer";
import "./Signinpage.css";
function SigninPage() {
    return (
        <div className="sign">
            <Signin />
            {/* <Footer /> */}
        </div>
    );
}

export default SigninPage;