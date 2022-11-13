import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {FaBars,FaTimes} from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    const handleSignOut = () => {
        const token = localStorage.getItem("token");

        axios({
            url: "https://notify-notify.herokuapp.com/users/logout",
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(async () => {
            const isTokenExists = await localStorage.getItem("token");
            if (isTokenExists) {
                localStorage.removeItem("token");
                navigate("/");
            }
        });
    };

    const handleDeleteAcc = () => {
        const token = localStorage.getItem("token");

        axios({
            url: "https://notify-notify.herokuapp.com/users/delete",
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(() => {
            console.log("User Account deleted");
            localStorage.removeItem("token");
            navigate("/");
        });
    };

    return (
        <div className="navbar">
            <div className="navtitle">
                <Link className="navtitle" to="/dashboard">
                    <h2 className="titletext">Notify</h2>
                </Link>
            </div>
            <div className="navrouters">
                <Link className="navrouters" to="/dashboard">
                    <span className="routes">Dashboard</span>
                </Link>
            </div>
            <div className={click?"navbtns active": "navbtns"}>
                <button className="createnote" onClick={handleSignOut}>
                    Sign Out
                </button>
                <button
                    className="createnote delaccountbtn"
                    onClick={handleDeleteAcc}
                >
                    Delete Account
                </button>
               
            </div>
            <div className="hamburger" onClick={handleClick}>
                    {!click ?(
                        <FaBars size={20} style={{color:"#000"}}  />
                    ):(
                        <FaTimes size={20} style={{color:"#fff"}}  />
                    )}
                
                    
                </div>
        </div>
    );
};

export default Navbar;