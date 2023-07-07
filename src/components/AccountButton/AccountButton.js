import './AccountButton.css';
import { Link } from 'react-router-dom';

function AccountButton({ onNavigateToProfile }) {
  return (
    <Link to='/profile' className='account-button__link'>
      <button className='account-button__button' type='button' onClick={onNavigateToProfile}>Аккаунт</button>
    </Link>
  );
}

export default AccountButton;