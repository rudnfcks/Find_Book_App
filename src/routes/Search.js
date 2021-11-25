import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import List from "../Components/List";

function Search({ match }) {
  const { search, index } = match.params;

  return (
    <div id="wrap">
      <Header />
      <Nav select={1} />
      <List search={search} index={index} />
      <Footer />
    </div>
  );
}

export default Search;
