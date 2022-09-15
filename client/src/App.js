import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />

    <Routes>
      <Route path="/" element={
        <Landing />
      } />
      <Route path="/portfolio" element={
        <Portfolio />
      } />
      <Route path="/about" element={
        <About />
      } />
      <Route path="/contact" element={
        <Contact />
      } />
    </Routes>

    </div>
  );
}

export default App;
