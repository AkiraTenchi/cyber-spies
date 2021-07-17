import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {Form, Button} from "react-bootstrap";
import './Login.css';



const Login = ()=> {
    const history = useHistory();

    const [Username, SetUsername] = useState("");
    const [Password, SetPassword] = useState("");

    const logintoAccount = async (e)=>{

        e.preventDefault();

        console.log("Username " + Username);
        console.log("Password " + Password);
    }


    return(
        <div className="LoginDiv MainBg">
            <div className="Login">
            <h1>Welcome</h1>
            <Form onSubmit={logintoAccount}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Control type="text" placeholder="USERNAME" onChange={(e)=>{SetUsername(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="PASSWORD" onChange={(e)=>{SetPassword(e.target.value)}} />
            </Form.Group>
            <Button className="btnlogin" variant="dark" type="submit">
                LOGIN
            </Button>
            <Button className="btnlogin" variant="dark" onClick={()=>{history.push("/register")}}>
                NEW USER?
            </Button>
            </Form>
            </div>
        </div>
        )
}


export default Login;