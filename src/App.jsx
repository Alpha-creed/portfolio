import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Service from "./Pages/Service";
import Technology from "./Pages/Technology";
import About from "./Pages/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from "./Pages/Details";


function App() {

  return (
    <Router>
            <Header/>

      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/services" element={<Service/>}/>
      <Route path="/technologies" element={<Technology/>}/>
      <Route path="/contact" element={<About/>}/>
      <Route path="/details" element={<Details/>}/>

      </Routes>
      <Footer/>
      </Router>
  )
}

export default App
