import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./routes/Home";

import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    window.fetch("");
  });

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/search">
          <div>search</div>
        </Route>
        <Route path="/select">
          <div>select</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
