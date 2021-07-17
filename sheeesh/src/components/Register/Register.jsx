import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {Form, Button} from "react-bootstrap";
import './Register.css';


const Register = ()=> {
    const history = useHistory();

    const [Username, SetUsername] = useState("");
    const [Password, SetPassword] = useState("");
    const [Password2, SetPassword2] = useState("");

    const registerAccount = async (e)=>{

        e.preventDefault()

        console.log("Username " + Username);
        console.log("Password " + Password);
        console.log("Password2 " + Password2);

        history.push("/login")

    }


    return(
        <div className="RegisterDiv MainBg">
        
        <div className="Login">
            <h1>REGISTER</h1>
            <Form onSubmit={registerAccount}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Control type="text" placeholder="USERNAME" onChange={(e)=>{SetUsername(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="PASSWORD" onChange={(e)=>{SetPassword(e.target.value)}} />
                <Form.Control type="password2" placeholder="CONFIRM PASSWORD" onChange={(e)=>{SetPassword2(e.target.value)}} />
            </Form.Group>
            <Button className="btnlogin" variant="dark" type="submit">
                REGISTER
            </Button>
            </Form>
            </div>


        </div>
        )
}


export default Register;