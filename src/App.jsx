import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header/>
      <main className="container">
        <About/>
          <Projects/>
          <TechStack/>
          <Connect/>
          <Footer/>
  </main>
    </>
  );
}

export default App;
