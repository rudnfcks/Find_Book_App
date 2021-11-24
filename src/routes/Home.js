import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Slide from "../Components/Slide";
import Footer from "../Components/Footer";

function Home({ value }) {
  return (
    <div id="wrap">
      <Header />
      <Nav select={0} />
      <Slide />
      <Footer />
    </div>
  );
}

export default Home;
