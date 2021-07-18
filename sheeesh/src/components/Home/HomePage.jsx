import React, {useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './HomePage.css';
import NavBar from '../NavBar/NavBar';
import Slides from '../Slides/Slides';




const HomePage = ()=> {

    const state = useSelector((state)=>state)
    const dispatch = useDispatch()

    const { update } = bindActionCreators(actionCreators, dispatch)

    return(
        <div className="HomePageDiv MainBg">
            <NavBar/>
            <div class="d-flex justify-content-evenly" style={{paddingTop: "25px"}}>
                <div className="displayUserData">
                    <label>Username</label>
                    <h4>{state.account.username}</h4>
                </div>
                <div className="displayUserData">
                    <label>Points Available</label>
                    <h4>{state.account.coins}</h4>
                </div>
            </div>
            
            <h1>Current Rewards</h1>
            <Slides/>

        </div>
        )
}


export default HomePage;