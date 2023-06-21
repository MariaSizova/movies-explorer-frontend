import './AccountButton.css';
import { Link } from 'react-router-dom';

function AccountButton() {
  return (
    <Link to='/profile' className='account-button__link'>
      <button className='account-button__button'>Аккаунт</button>
    </Link>
  );
}

export default AccountButton;