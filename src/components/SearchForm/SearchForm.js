import { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { useLocation } from 'react-router-dom';

function SearchForm({ onSubmit, onChekIsCheckboxChecked, checked, onFilter, isLoading, moviesRequest }) {
  const [userRequest, setUserRequest] = useState('');
  const [errorText, setErrorText] = useState('');

  const { pathname } = useLocation();

  useEffect(() => {
    moviesRequest && setUserRequest(moviesRequest);
  }, [moviesRequest]);

  const handleSubmit = (e) => {
    e.preventDefault();
    pathname !== '/movies' || userRequest ? onSubmit(userRequest) : setErrorText('Нужно ввести ключевое слово');
  };

  const handleChange = (e) => {
    setUserRequest(e.target.value);
  };


  return (
    <section className='search-form'>
      <div className='search-form__content'>
        <form className='search-form__form' name='search-form' onSubmit={handleSubmit} noValidate>
          <button className='search-form__icon'></button>
          <input
          className='search-form__input'
          type='search'
          value={userRequest || ''}
          name='search'
          id='search'
          onChange={handleChange}
          placeholder='Фильм'
          autoComplete='off'
          disabled={isLoading}
          required
          />
          <button className='search-form__submit-button' type='submit' disabled={isLoading}></button>
          </form>
          <span className='search-form__error'>{errorText}</span>
        <FilterCheckbox onChekIsCheckboxChecked={onChekIsCheckboxChecked} checked={checked} onFilter={onFilter}/>
      </div>
    </section>
  );
}

export default SearchForm;