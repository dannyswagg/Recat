import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Component/Navigation";
import Hero from "./Component/Hero";
import Section from "./Component/Section";
import Services from "./Component/Section2";
import Footer from "./Component/Footer/Index.js";
import Card from "./Component/Card";
import Sign from "./Component/Sign";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Hero />
        <Section />
        <Services />
        <Card />
        <Sign />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
