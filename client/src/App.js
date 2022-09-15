import Landing from './pages/Landing';
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
    </Routes>

    </div>
  );
}

export default App;
