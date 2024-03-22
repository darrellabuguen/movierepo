import Categories from './pages/Categories';
import MovieInfo from './pages/MovieInfo';
import About from './pages/About';
import Movies from './components/Movies';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Result from './pages/Result';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path='/result/:mvname' element={<Result />} />
          <Route exact path='/movies/movieinfo/:movieid' element={<MovieInfo />} />
          <Route exact path='/categories/:category' element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
