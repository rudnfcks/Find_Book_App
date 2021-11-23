import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.fetch("");
  });

  return (
    <div id="wrap">
      <Header />
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
