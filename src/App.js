import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Find_Book_App">
          <Home />
        </Route>
        <Route path="/Find_Book_App/search">
          <div>search</div>
        </Route>
        <Route path="/Find_Book_App/select">
          <div>select</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
