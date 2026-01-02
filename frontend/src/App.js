import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Promotions from "./components/Promotions";
import MenuSection from "./components/MenuSection";
import About from "./components/About";
import Location from "./components/Location";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import OrderModal from "./components/OrderModal";

const Home = () => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  return (
    <>
      <Header />
      <Hero onOrderClick={() => setOrderModalOpen(true)} />
      <Promotions onOrderClick={() => setOrderModalOpen(true)} />
      <MenuSection />
      <About />
      <Location />
      <Reviews />
      <Footer />
      <OrderModal open={orderModalOpen} onClose={() => setOrderModalOpen(false)} />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
