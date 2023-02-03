import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import BuyProperty from "./pages/BuyProperty";
import RentProperty from "./pages/RentProperty";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import Error404 from "./pages/Error404";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/buy" exact component={BuyProperty} />
        <Route path="/rent" exact component={RentProperty} />
        <Route path="/favorites" exact component={Favorites} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
