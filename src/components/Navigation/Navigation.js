import './Navigation.css'
import LoggedInMenu from '../LoggedInMenu/LoggedInMenu';
import MainMenu from '../MainMenu/MainMenu';
import { useLocation } from 'react-router-dom';

function Navigation({ isLoggedIn, isBurgerMenuOpen, onBurgerMenuOpen }) {
  const { pathname } = useLocation();
  const otherPaths = pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile';
  const mainPath = pathname === '/';
  
  return(
    <nav className={`navigation ${otherPaths && 'navigation_place_movies'}`}>
      {mainPath && (
        <ul className='navigation__links'>
          <li>{isLoggedIn && <LoggedInMenu type='main' />}</li>
          <li>{!isLoggedIn && <MainMenu />}</li>
        </ul>
      )}
      {otherPaths && <LoggedInMenu type='movies' />}
    </nav>
  );
}

export default Navigation;