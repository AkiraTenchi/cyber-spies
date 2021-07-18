import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, useHistory} from "react-router-dom";
import { actionCreators } from '../../state';
import {Navbar, Nav, Container} from "react-bootstrap";
import './NavBar.css';
import profileImg from "../../images/profile.png";




const NavBar = ()=> {

    const history = useHistory()
    const state = useSelector((state)=>state)
    const dispatch = useDispatch()

    const {logout} = bindActionCreators(actionCreators, dispatch)


    const onLogOut = ()=>{
        logout()
        history.push("/login")
    }

    const profileClick = ()=>{
        history.push("/")
    }

    return(
        <div >
        <Navbar collapseOnSelect expand="sm" className="navbar" bg="dark" variant="dark">
            <Container >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="space-navbar-between" id="responsive-navbar-nav">
                <Nav >
                    <Nav.Item className="profileImg" onClick={profileClick}>
                            <img src={profileImg} alt="profile icon" />
                    </Nav.Item>
                    <Nav.Item style={{display: "flex", alignItems: "center", justifyContent: "center"}} >
                            <h5 className="points">Points</h5>
                    </Nav.Item>
                </Nav>
                <Nav >
                    <Nav.Link className="redirBtn" href="#home">Referral Links</Nav.Link>
                    <Nav.Link className="redirBtn" href="#features">Minigames</Nav.Link>
                </Nav>
                <Nav >

                    <Nav.Link className="logoutBtn" onClick={onLogOut}>Log Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
        )
}


export default NavBar;