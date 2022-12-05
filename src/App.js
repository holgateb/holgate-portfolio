import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Banner />
        <Skills />
        <Footer />
      </header>
    </div>
  );
}

export default App;
