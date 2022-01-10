import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/Login.css"

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password)
        if (username === "Admin" && password === "Admin") {
            localStorage.setItem("isAuthenticated", "true");
            navigate("/")
        }
    }

    if (localStorage.getItem("isAuthenticated") === "true") {
        return <Navigate to="/" />
    }

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit} className="form-signin">       
                <h2 className="form-signin-heading">Login</h2>
                <input type="text" onChange={e => setUsername(e.target.value)} className="form-control" name="username" placeholder="Username" required="" autoFocus="" />
                <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" name="password" placeholder="Password" required=""/>      

                <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
            </form>
        </div>
    )
}

export default Login
