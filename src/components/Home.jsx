import React from "react";
import { app } from "../Firebase";
//import { app } from "firebase";

//material-ui
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

function Home(props) {

    return (
        <div>
            <Container maxWidth="sm" style={{ textAlign: "left", width: "70%" }}>

                <h2>Home Page</h2><br />
                <h4>メールアドレス</h4>
                <h4>{app.auth().currentUser.email}で<br />ログインされています</h4><br />
                <Button variant="contained" color="secondary" onClick={() => app.auth().signOut()}>Sign out</Button>
            </Container>

        </div>
    );
}

export default Home;