import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Pokemon from './pages/Pokemon';
import Search from './pages/Search';


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
