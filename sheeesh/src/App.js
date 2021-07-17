import { BrowserRouter, Route, Link, Switch, Redirect} from "react-router-dom";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { actionCreators } from "./state";
import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ErrorPage from "./components/ErrorPage/ErrorPage";


function App() {

  const state = useSelector((state)=>state)

  const dispatch = useDispatch()

  const {login, logout} = bindActionCreators(actionCreators, dispatch)

  console.log(state)
  
  return (
    <div className="AppDiv">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={()=> { return (state.account? <HomePage/>:<Redirect to="/login"/>)}} />
          <Route path="/login" exact component={()=> { return (!state.account? <Login/>:<Redirect to="/"/>)}}/>
          <Route path="/register" exact component={()=> { return (!state.account? <Register/>:<Redirect to="/"/>)}}/>
          <Route path="/"  component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
