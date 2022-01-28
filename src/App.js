import "./Styles/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Services from "./Components/Services";
import About from "./Components/About";
import Questions from "./Components/Questions";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Questions></Questions>
      <Footer></Footer>
    </div>
  );
}

export default App;
