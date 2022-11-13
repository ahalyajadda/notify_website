import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import axios from "axios";

import {Delete} from "@mui/icons-material";

const Home = () => {
    const [noteList, setNotes] = useState([]);

    const callFn = () => {
        const token = localStorage.getItem("token");

        axios
            .get(`${process.env.REACT_APP_NOTERAPP_BACKEND}/notes`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                console.log(res);
                setNotes(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        callFn();
    }, []);

    useEffect(() => {
        callFn();
    }, [setNotes]);

    return (
        <div className="main">

        
        <div className="home">
            <h1 className="homenotes">Notes</h1>

            <Link to="/create">
                <button className="addbtn">+</button>
            </Link>

            {!noteList ||
                (noteList.length == 0 && (
                    <h2 className="nonotesfound">No Notes Found</h2>
                ))}
            <div className="notelist">
                {noteList && (
                    <div>
                        {" "}
                        {noteList.map((note) => (
                            <div className="note">
                                <div className="notecontent">
                                    {note.content}
                                </div>
                                <Link to={`/deletetask/${note._id}`}>
                                    <span className="DelIcon">
                                        <Delete />
                                    </span>
                                </Link>
                                

                            </div>
                        ))}{" "}
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default Home;