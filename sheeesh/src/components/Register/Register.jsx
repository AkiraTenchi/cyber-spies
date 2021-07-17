import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {Form, Button} from "react-bootstrap";
import './Register.css';


const Register = ()=> {
    const history = useHistory();

    const [Username, SetUsername] = useState("");
    const [Password, SetPassword] = useState("");
    const [Password2, SetPassword2] = useState("");

    function hasWhiteSpace(s) {
        return /\s/g.test(s);
      }

    
    // check if user exist
    const usernameExist = async()=>{
        const res = await fetch("/users/"+Username, 
        {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        });

        const content = await res.json();
        
        if(content.username == Username){
            return true
        } else {
            return false
        }
    }

    // register functions
    const registerAccount = async (e)=>{

        e.preventDefault()
        
        if(hasWhiteSpace(Username)){
            window.alert("No white spaces allowed on username")
            return null;
        }

        if(usernameExist(Username)){
            window.alert("username is already taken")
            return null;
        }

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

        if(content.username != null || content.username != undefined){
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