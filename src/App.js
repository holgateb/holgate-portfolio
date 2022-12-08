import React from "react";
import Navigation from "./components/Navbar";
import Banner from "./components/Banner";
// import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navigation />
      
      <Banner />

      <Footer />
    </div>
  );
}

export default App;
