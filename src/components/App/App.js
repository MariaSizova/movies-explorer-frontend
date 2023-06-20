import './App.css';
import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'

function App() {
	const [initialMovies, setInitialMovies] = useState([]);
	const [isMovieSaved, setIsMovieSaved] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
	const [user, setUser] = useState({ name: 'Виталий', email: 'pochta@yandex.ru' });

  useEffect(() => {
	function handleAutoCloseMenu() {
	  window.onresize = () => {
		 setIsBurgerMenuOpen(false);
	  };
	}

	if (isBurgerMenuOpen) {
	  window.addEventListener('resize', handleAutoCloseMenu);
	  return () => window.removeEventListener('resize', handleAutoCloseMenu);
	}
 }, [isBurgerMenuOpen]);

  //useEffect(() => {
    //moviesApi.getMovies().then((movies) => {
      //setInitialMovies(movies);
    //});
  //}, []);

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

			<Route path='/signin' element={<Login />}></Route>
          <Route path='/signup' element={<Register />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
			 </Routes>
			 <Footer />
		</div>
    </div>
  );
}

export default App;
