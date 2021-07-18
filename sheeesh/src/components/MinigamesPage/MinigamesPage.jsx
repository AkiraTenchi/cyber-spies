import React, {useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import ReactDOM from 'react-dom';
import { Card, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Link, Switch,useHistory } from "react-router-dom";
import './MinigamesPage.css';
import NavBar from '../NavBar/NavBar';
import Slides from '../Slides/Slides';
import playImg from "../../images/play.png";
import image8 from "../../images/image8.png";



const MinigamesPage = ()=> {
    const history = useHistory()
    const state = useSelector((state)=>state)
    const dispatch = useDispatch()

    const { update } = bindActionCreators(actionCreators, dispatch)

    const playMinGame = async ()=>{

        update()

        const canplay = (state.account.coins >= 25)

        if(canplay){

            const res = await fetch("/users/"+state.account.username+"/addcoins", 
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: -25
            });

            update()
            window.open("/game1", "_blank")

        } else
        {
            window.alert("Not enough points to play")
        }

    }

    return(
        <div className="MinigamesPageDiv MainBg">
            <NavBar/>
            <h1>minigames</h1>

            <Card style={{ width: '18rem', margin:"auto", borderRadius: "5px"}}>
            <Card.Img variant="top" src={image8} />
            <Card.Body>
                <Card.Title> Snake - 25 Points</Card.Title>
                <Card.Text>
                    Get 2 points and win a reward
                </Card.Text>
                <Button onClick={playMinGame} style={{padding: "0", margin: "0"}} variant="primary"><img src={playImg} style={{maxWidth: "50%"}}></img></Button>
            </Card.Body>
            </Card>

        </div>
        )
}


export default MinigamesPage;