import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/PageHome';
import PageCalculator from './pages/PageCalculator';
import Contato from './pages/PageContato';
import Aside from './components/Aside';
import PagePrivacityPolicy from './pages/PagePrivacityPolicy';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <BrowserRouter>
      <main className="main-container">
        <Header />
        <Aside />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calc/*" element={<PageCalculator />}/>
          <Route path="contact" element={<Contato />} />
          <Route path="privacity-policy" element={<PagePrivacityPolicy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
