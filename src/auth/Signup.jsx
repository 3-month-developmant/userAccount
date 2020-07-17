import React, { useContext } from "react";
import { withRouter } from "react-router";
import { AuthContext } from "./AuthProvider";

//material-ui
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const SignUp = ({ history }) => {
    const { signup } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        signup(email.value, password.value, history);
    };

    function toLogIn(){
        window.location.href = "/login";
    }

    return (
        <div>
            <Container maxWidth="sm" style={{ textAlign: "left", width: "70%" }}>

                <br /><h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <TextField id="standard-basic" name="email" type="email" label="Email" />
                    </label><br />
                    <label>
                        <TextField id="standard-basic" name="password" type="password" label="Password" />
                    </label><br /><br />
                    <Button variant="contained" type="submit">Sign up</Button><br/><br/><br/>
                    <Button color="primary" onClick={toLogIn} >Already have an account? <br/>Login</Button>
                </form>
            </Container>
        </div>
    );
};

export default withRouter(SignUp);