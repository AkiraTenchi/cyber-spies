import React,{ useState, useEffect }from "react";
import { BrowserRouter, Route, Link, Switch, Redirect} from "react-router-dom";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { actionCreators } from "./state";
import HomePage from "./components/Home/HomePage";
import MinigamesPage from "./components/MinigamesPage/MinigamesPage";
import ReferralPage from "./components/ReferralPage/ReferralPage";
import RewardPage from "./components/RewardPage/RewardPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { stat } from "fs";


function App() {

  const state = useSelector((state)=>state)

  const dispatch = useDispatch()

  const {login, logout, update} = bindActionCreators(actionCreators, dispatch)

  
  return (
    <div className="AppDiv">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={()=> { return (state.account? <HomePage/>:<Redirect to="/login"/>)}} />
          <Route path="/referral" exact component={()=> { return (state.account? <ReferralPage/>:<Redirect to="/login"/>)}} />
          <Route path="/minigames" exact component={()=> { return (state.account? <MinigamesPage/>:<Redirect to="/login"/>)}} />
          <Route path="/rewards" exact component={()=> { return (state.account? <RewardPage/>:<Redirect to="/login"/>)}} />
          <Route path="/login" exact component={()=> { return (!state.account? <Login/>:<Redirect to="/"/>)}}/>
          <Route path="/register" exact component={()=> { return (!state.account? <Register/>:<Redirect to="/"/>)}}/>
          <Route path="/"  component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
