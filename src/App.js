import Categories from './pages/Categories';
import MovieInfo from './pages/MovieInfo';
import People from './pages/People';
import Movies from './pages/Movies';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Result from './pages/Result';
import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import CelebrityInfo from './pages/CelebrityInfo';

function App() {
  const [goToTop, showTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      var scrolled = window.scrollY;
      if (scrolled > 300) {
        showTop(true);
      } else {
        showTop(false);
      }
    });
  })

  return (
    <div className="App text-white">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/people" element={<People />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path='/result/:mvname' element={<Result />} />
          <Route exact path='/movies/movieinfo/:movieid' element={<MovieInfo />} />
          <Route exact path='/categories/:category' element={<Categories />} />
          <Route exact path='/people/:celebname/:celebid' element={<CelebrityInfo />} />
        </Routes>
      </Router>
      {goToTop && (
        <div className='fixed bottom-6 left-4 bg-gray-500 text-white h-9 w-9 rounded-full flex items-center justify-center shadow-md shadow-slate-900'>
          <button
            onClick={() => window.scrollTo(0, 0)}
          >
            <IoIosArrowUp />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
