import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginPage = () => {
    const context = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        context.authenticate(userName, password);
    };

    let location = useLocation();
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/home" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Login Page</h1>
            <h2>You must log in to view the protected pages</h2>
            <TextField
                id="username"
                label="User Name"
                variant="outlined"
                margin="normal"
                style={{ width: "300px" }}
                onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <TextField
                id="password"
                type="password"
                label="Password"
                variant="outlined"
                margin="normal"
                style={{ width: "300px" }}
                onChange={(e) => setPassword(e.target.value)}
            />
            {context.loginErr && (<div style={{ textAlign: "center", marginTop: "50px" }}>{context.loginErr}</div>)}
            <br />
            <Button variant="contained" color="primary" onClick={handleLogin}>
                Log in
            </Button>
            <h2>
                Not Registered? <Link to="/signup">Sign Up!</Link>
            </h2>
        </div>
    );
};

export default LoginPage;
