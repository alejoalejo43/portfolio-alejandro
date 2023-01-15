import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './layout/Header';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Cv from './pages/Cv';
import Links from './pages/Links';
import Portfolio from './pages/Portfolio';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/links" element={<Links />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
