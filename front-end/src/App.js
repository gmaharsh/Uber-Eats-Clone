import './App.css';
import Header from './Componets/Header/Header';
import Home from './Componets/Home/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Order from './Componets/Order/Order';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <h1>This is checkout Page</h1>
          </Route>
          <Route path="/chicago/:restaurent">
            <Order />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
