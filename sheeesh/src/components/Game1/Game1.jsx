import * as React from "react";
import * as ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import { Context, SnakeGame } from "react-game-snake";
import NavBar from '../NavBar/NavBar';

const Game1 = ()=>{

    const history = useHistory()


    const win= ()=>{
        history.push("/rewards")
    }

    const lose= ()=>{
        history.push("/")
    }

    const checkPoints = (points)=>{
        if(points >= 2){
            win()
        } else{
            lose()
        }
    }

    return (
        
        <div style={{height: "100%"}} className="Game1Div MainBg">
            <div style={{    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "fit-content"}}>
    <SnakeGame 
        colors={{
            field: "#bdc3c7",
            food: "#9b59b6",
            snake: "#3498db",
        }}
        countOfHorizontalFields={20}
        countOfVerticalFields={20}
        fieldSize={20}
        loopTime={100}
        pauseAllowed={false}
        restartAllowed={false}
        onLoose={(context) => checkPoints(context.game.points)}
        onWin={(context) => checkPoints(context.game.points)}
    />
    </div>
    </div>
)
}

export default Game1;