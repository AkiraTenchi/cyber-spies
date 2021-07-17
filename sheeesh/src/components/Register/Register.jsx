import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {Form, Button} from "react-bootstrap";
import './Register.css';


const Register = ()=> {
    const history = useHistory();

    const [Username, SetUsername] = useState("");
    const [Password, SetPassword] = useState("");
    const [Password2, SetPassword2] = useState("");


    // register functions
    const registerAccount = async (e)=>{

        e.preventDefault()

        // check if re-typed password is same with the first passowrd
        if(Password != Password2){

            window.alert("password must be the same")
            return null;
        }

        // create payload so we can send to the api
        const payload = {
            "username": Username,
            "pwd": Password
        }


        const res = await fetch("/users/", 
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        });

        const content = await res.json();

        if(content.id != null || content.id != undefined){
            history.push("/login")
        } else{
            window.alert("Something went wrong")
            return null;
        }

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
                <Form.Control type="password" placeholder="CONFIRM PASSWORD" onChange={(e)=>{SetPassword2(e.target.value)}} />
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