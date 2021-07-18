import React, {useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import ReactDOM from 'react-dom';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Link, Switch, useHistory } from "react-router-dom";
import './RewardPage.css';
import NavBar from '../NavBar/NavBar';
import Slides from '../Slides/Slides';
import rewards from "../../images/rewards.png";
import vcard from "../../images/vcard.png";
import coupon from "../../images/coupon.jpg";
import pan from "../../images/pan.png";



const RewardPage = ()=> {
    const history = useHistory()
    const state = useSelector((state)=>state)
    const dispatch = useDispatch()

    const { update } = bindActionCreators(actionCreators, dispatch)

    const postReward = async (imageUrl, name, description, linkUrl)=>{


        await fetch("/users/"+state.account.username+"/vouchers/add", 
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "imageUrl": imageUrl,
                "name": name,
                "description": description,
                "linkUrl": linkUrl
            })
        });

        update()

        history.push("/")



    }

    document.body.style.overflowX = "hidden";

    return(
        <div className="RewardPageDiv MainBg">
            <NavBar/>
            <img style={{maxWidth: "33vw"}} src={rewards}>
            </img>

            <CardGroup>
                <Card>
                    <Card.Img style={{width: "18rem", margin: "auto"}} variant="top" src={vcard} />
                    <Card.Body>
                    <Card.Title>Fornite V-Card - 1337</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button onClick={()=>{postReward(vcard, "Fornite V-Card - 1337", "", "" )}}>Confirm</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img style={{width: "18rem", margin: "auto"}} variant="top" src={coupon} />
                    <Card.Body>
                    <Card.Title>Coupon 10% off on amazon</Card.Title>
                    <Card.Text>
                        Get 10% off on any product
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button onClick={()=>{postReward(coupon, "Coupon 10% off on amazon", "Get 10% off on any product", "" )}}>Confirm</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img style={{width: "18rem", margin: "auto"}} variant="top" src={pan} />
                    <Card.Body>
                    <Card.Title>Pan</Card.Title>
                    <Card.Text>
                        You will get free pan
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button onClick={()=>{postReward(pan, "Pan", "You will get free pan", "" )}}>Confirm</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
        )
}


export default RewardPage;