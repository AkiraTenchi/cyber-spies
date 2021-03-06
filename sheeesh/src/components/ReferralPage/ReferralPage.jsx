import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import { useHistory } from "react-router-dom";
import './ReferralPage.css';
import NavBar from '../NavBar/NavBar';
import Slides from '../Slides/Slides';
import ps5Img from '../../images/ps5.jpg';
import xboxImg from '../../images/xbox.jpg';
import img3090 from '../../images/3090.png';


const ReferralPage = ()=> {
    const history = useHistory()
    const state = useSelector((state)=>state)
    const dispatch = useDispatch()

    const { update } = bindActionCreators(actionCreators, dispatch)

    const items = [
        {
            "name": "Playstaion 5",
            "description": "Rare item, in current times",
            "imageUrl": ps5Img
        },
        {
            "name": "Xbox",
            "description": "Console made by 4 squares",
            "imageUrl": xboxImg
        },
        {
            "name": "3090 gpu",
            "description": "Mythological creatures that doesn't exist",
            "imageUrl": img3090
        }
    ]

    const imgClicked = async ()=>{

        const rnd = Math.floor(Math.random() * (50 - 10) + 10)
        await fetch("/users/"+state.account.username+"/addcoins", 
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: rnd
        });

        update()
        history.push("/referral")

    }

    return(
        <div className="ReferralPageDiv MainBg">
            <NavBar/>
            <h1>Current Offers</h1>
            <Slides imgClicked={imgClicked} items={items}/>

        </div>
        )
}


export default ReferralPage;