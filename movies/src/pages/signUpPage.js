import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignUpPage = () => {
    const context = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [registered, setRegistered] = useState(false);

    const handleRegister = () => {
        let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegEx.test(password);

        if (validPassword && password === passwordAgain) {
            context.register(userName, password);
            setRegistered(true);
        }
    };

    if (registered) {
        return <Navigate to="/login" />;
    }

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>SignUp Page</h1>
            <h2>You must register a username and password to log in</h2>
            <TextField
                value={userName}
                label="User Name"
                variant="outlined"
                margin="normal"
                style={{ width: "300px" }}
                onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <TextField
                value={password}
                type="password"
                label="Password"
                variant="outlined"
                margin="normal"
                style={{ width: "300px" }}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <TextField
                value={passwordAgain}
                type="password"
                label="Password Again"
                variant="outlined"
                margin="normal"
                style={{ width: "300px" }}
                onChange={(e) => setPasswordAgain(e.target.value)}
            />
            <br />
            <Button variant="contained" color="primary" onClick={handleRegister}>
                Register
            </Button>
        </div>
    );
};

export default SignUpPage;
