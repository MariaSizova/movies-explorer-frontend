import './MainMenu.css';

function MainMenu({ onNavigateToSignup, onNavigateToSignin }) {
  return (
    <ul className='main-menu'>
      <li>
        <button className='main-menu__button' type='button' onClick={onNavigateToSignup}>
          Регистрация
        </button>
      </li>
      <li>
        <button className='main-menu__button main-menu__button_type_login' type='button' onClick={onNavigateToSignin}>
          Войти
        </button>
      </li>
    </ul>
  );
}

export default MainMenu;