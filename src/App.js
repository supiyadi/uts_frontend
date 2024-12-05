import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const galleryItems = [
    { id: 1, image: "/images/2.jpg", name: "Kopi Arabika" },
    { id: 2, image: "/images/1.jpg", name: "Kopi Robusta" },
    { id: 3, image: "/images/3.jpg", name: "Kopi Luwak" },
    { id: 4, image: "/images/4.jpg", name: "Matcha" },
    { id: 5, image: "/images/5.jpg", name: "Chocolate" }
  ];


  return (
    <div className="App">
      <Header />
      <About />
      <Gallery items={galleryItems} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
