import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Search from "./routes/Search";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search/:search/:index" component={Search}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
