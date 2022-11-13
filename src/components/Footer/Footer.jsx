import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <h2 className="footertitle">Noter</h2>
            <div className="router">
                <span className="route">About</span>
                <span className="route">Contact</span>
                <span className="route">Support</span>
                <span className="route">Terms</span>
                <span className="route">Privacy</span>
            </div>
        </div>
    );
};

export default Footer;