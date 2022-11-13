import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./signin.css";

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignin = (e) => {
        e.preventDefault();
        const user = { username, password };

        axios({
            method: "POST",
            url: "https://notify-notify.herokuapp.com/users/login",
            headers: {
                "Content-Type": "application/json",
            },
            data: user,
        })
            .then((res) => {
                console.log("User logged in");
                const token = res.data.token;
                localStorage.setItem("token", token);
                navigate("/dashboard");
            })
            .catch((err) => {
                alert("Authentication failed");
                setUsername("");
                setPassword("");
            });
    };

    return (
        <div className="Signin">
            <div className="left1">
                <img src="https://cdn.mos.cms.futurecdn.net/hgZhXTFRWcPjsDYyF7C28b.jpg" alt="" className="image" />
            </div>
            <div className="SigninForm">
                <div className="content">
                <h1>Notify</h1>
                <h3>Login</h3>
                <form>
                    <div className="FormUsername dat">
                        <span className="FormLabel">Username</span>
                        <input
                            type="text"
                            className="FormInput"
                            required 
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                    </div>
                    <div className="FormPassword dat">
                        <span className="FormLabel">Password</span>
                        <input
                            type="password"
                            className="FormInput"
                            required
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="FormBtns">
                        <button className="Btns" onClick={handleSignin}>
                            Sign In
                        </button>
                        <p>Don't have an account..? <a href="/register">Create an account</a></p>
                    
                    </div>
                    </form>
                </div>
               
                
            </div>
        </div>
    );
};

export default Signin;