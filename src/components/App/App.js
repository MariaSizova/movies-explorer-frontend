import './App.css';
import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
	const [initialMovies, setInitialMovies] = useState([]);
  const [isMovieSaved, setIsMovieSaved] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  useEffect(() => {
    moviesApi.getMovies().then((movies) => {
      setInitialMovies(movies);
    });
  }, []);

  function handleSaveMovie() {
    setIsMovieSaved(!isMovieSaved);
  }

  function handleOpenBurgerMenu() {
    setIsBurgerMenuOpen(true);
  }

  function handleClosrBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }

  return (
    <div className='page'>
		<div className='page__content'>
			<Header 
			isLoggedIn={isLoggedIn}
			isBurgerMenuOpen={isBurgerMenuOpen}
			onBurgerMenuOpen={handleOpenBurgerMenu}
			onBurgerMenuClose={handleClosrBurgerMenu}>
			</Header>
			<Routes>
          <Route
            path='/'
            element={<Main isBurgerMenuOpen={isBurgerMenuOpen} onBurgerMenuOpen={handleOpenBurgerMenu} />}
          ></Route>
			 </Routes>
		</div>
    </div>
  );
}

export default App;
