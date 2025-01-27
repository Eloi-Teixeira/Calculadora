import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Contato from './pages/Contato';
import Aside from './components/Aside';

const App = () => {
  return (
    <BrowserRouter>
      <main className="main-container">
        <Header />
        <Aside />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="calc" element={<Calculator />} />
          <Route path="contact" element={<Contato />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
