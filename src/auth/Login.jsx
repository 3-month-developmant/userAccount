import React, { useContext } from "react";
import { withRouter } from "react-router";
import { AuthContext } from "./AuthProvider";

//material-ui
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



const Login = ({ history }) => {

    const { login } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        login(email.value, password.value, history);
    };

    function toSignUp() {
        window.location.href = "/signup";
    }

    return (
        <div>
            <Container maxWidth="sm" style={{ textAlign: "left", width: "70%" }}>
                <br /><h1>Log in</h1>
                <form onSubmit={handleSubmit} style={{ textAlign: "left" }}><br />
                    <label>
                        <TextField id="standard-basic" name="email" type="email" label="Email" /><br />
                    </label><br />
                    <label>
                        <TextField id="standard-basic" name="password" type="password" label="Password" />
                    </label><br /><br />
                    <Button variant="contained" color="primary" type="submit">Log in</Button><br /><br />
                    <Button color="secondary" onClick={toSignUp} >Getting started</Button>
                </form>
            </Container>
        </div>
    );
};

export default withRouter(Login);