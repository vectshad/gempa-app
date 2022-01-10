import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div className="Navbar">
            <h2>BMKG</h2>
            <button onClick={handleOnClick}>Log out</button>
        </div>
    )
}

export default Navbar;