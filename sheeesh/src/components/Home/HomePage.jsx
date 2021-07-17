import React from 'react';
import {useSelector} from "react-redux";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './HomePage.css';




const HomePage = ()=> {

    const state = useSelector((state)=>state)

    return(
        <div className="HomePageDiv MainBg">

            <h1>hello {state.account.username}</h1>

        </div>
        )
}


export default HomePage;