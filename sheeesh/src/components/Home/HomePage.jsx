import React from 'react';
import {useSelector} from "react-redux";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './HomePage.css';
import NavBar from '../NavBar/NavBar';




const HomePage = ()=> {

    const state = useSelector((state)=>state)

    return(
        <div className="HomePageDiv MainBg">
            <NavBar/>
            <h1>hello {state.account.username}</h1>

        </div>
        )
}


export default HomePage;