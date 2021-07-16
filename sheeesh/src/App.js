import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
import HomePage from "./components/Home/HomePage";
import ErrorPage from "./components/ErrorPage/ErrorPage";


function App() {
  return (
    <div className="AppDiv">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/"  component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
