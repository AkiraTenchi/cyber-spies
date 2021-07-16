import React from 'react';
import ReactDOM from 'react-dom';
import './ErrorPage.css';





const ErrorPage = (props)=> {


    return(
        <div className="ErrorPageDiv MainBg">
        
        <h1>
            {props.errMsg? props.errMsg:"404"}
        </h1>

        </div>
        )
}


export default ErrorPage;