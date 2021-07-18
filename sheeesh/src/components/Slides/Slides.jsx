import React from 'react';
import './Slides.css';
import {Carousel} from "react-bootstrap";




const Slides = (props)=> {



    const showItems =()=>{
        
        if(props.items == null || props.items == undefined){
            return (<h3>Not Available</h3>)
        } else { return(
            props.items.map((item, idx) =>
            <Carousel.Item key={idx} style={{height:"50vh"}}>
            <img style={{height:"50vh", margin: "auto", cursor: "pointer"}}
            onClick={props.imgClicked}
            className="d-block"
            src={item.img}
            alt="First slide"

            />

            <Carousel.Caption>
            <div className="shadowBg">
                <h5  >{item.name}</h5>
                <p >{item.dis}</p>
            </div>
            </Carousel.Caption>

            </Carousel.Item>
            )
          );
        }
    }

    return(<div>
        <Carousel variant="dark">
            {showItems()}
        </Carousel>
        </div>
        )
}


export default Slides;