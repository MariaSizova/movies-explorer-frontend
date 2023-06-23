import AccountButton from '../AccountButton/AccountButton';
import './LoggedInMenu.css';
import { NavLink } from 'react-router-dom';

function LoggedInMenu({ place }) {
  const navLinkClassName = ({ isActive }) =>
    `logged-in-menu__link ${place === 'main' && 'logged-in-menu__link_place_main'} 
  ${isActive ? 'logged-in-menu__link_active' : ''}`;

  return (
    <ul className={`logged-in-menu ${place === 'movies' ? 'logged-in-menu_place_movies' : ''}`}>
      <li className={`logged-in-menu__item ${place === 'movies' && 'logged-in-menu__item_place_movies'}`}>
        <NavLink to='/movies' className={navLinkClassName}>
          Фильмы
        </NavLink>
        <NavLink to='/saved-movies' className={navLinkClassName}>
          Сохранённые фильмы
        </NavLink>
      </li>
      <li className='logged-in-menu__item'>
        <AccountButton />
      </li>
    </ul>
  );
}

export default LoggedInMenu;