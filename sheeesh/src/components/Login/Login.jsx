import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {Form, Button} from "react-bootstrap";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state";
import './Login.css';



const Login = ()=> {

    const dispatch = useDispatch()
  
    const {login} = bindActionCreators(actionCreators, dispatch)

    const history = useHistory();

    const [Username, SetUsername] = useState("");
    const [Password, SetPassword] = useState("");

    const logintoAccount = async (e)=>{

        e.preventDefault();

        const res = await fetch("/users/"+Username, 
        {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        });

        const content = await res.json();
        
        // just checking if we got proper reply and then compare password with backends reply
        const success = (content.pwd != null && content.pwd != undefined) && (content.pwd == Password)

        if(success){
            login({
                "username":Username
            })
            history.push("/")
        } else{
            window.alert("Something went wrong, or user does not exist, or passwrod is wrong")
            return null;
        }

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