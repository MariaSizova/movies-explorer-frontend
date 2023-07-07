import './MainMenu.css';
import { Link } from 'react-router-dom';

function MainMenu({ onNavigateToSignup, onNavigateToSignin }) {
  return (
    <ul className='main-menu'>
      <li>
        <Link to='/signup' className='main-menu__link'>
          <button className='main-menu__button' type='button' onClick={onNavigateToSignup}>Регистрация</button>
        </Link>
      </li>
      <li>
        <Link to='/signin' className='main-menu__link main-menu__link_type_login'>
          <button className='main-menu__button main-menu__button_type_login' type='button' onClick={onNavigateToSignin}>Войти</button>
        </Link>
      </li>
    </ul>
  );
}

export default MainMenu;