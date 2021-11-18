import Header from "./Header";
import Nav from "./Nav";

import style from "./css/App.module.css";
import reset from "./css/reset.css";

function App() {
  return (
    <div id={style.wrap}>
      <Header />
      <Nav />
      <section></section>
      <footer></footer>
    </div>
  );
}

export default App;
