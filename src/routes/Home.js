import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Main from "../Components/Main";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div id="wrap">
      <Header />
      <Nav select={0} />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
