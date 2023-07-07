import { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onSubmit, onChekIsCheckboxChecked, checked, onFilter, isLoading, moviesRequest }) {
  const [userRequest, setUserRequest] = useState('');
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    moviesRequest && setUserRequest(moviesRequest);
  }, [moviesRequest]);

  const handleSubmit = (e) => {
    e.preventDefault();
    userRequest ? onSubmit(userRequest) : setErrorText('Нужно ввести ключевое слово');
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
				onChange={handleChange}
            name='search'
            id='search'
            placeholder='Фильм'
            autoComplete='off'
            disabled={isLoading}
            required
          />
          <button className='search-form__submit-button' type='submit' disabled={isLoading}></button>
          </form>
        <FilterCheckbox onChekIsCheckboxChecked={onChekIsCheckboxChecked} checked={checked} onFilter={onFilter}/>
      </div>
    </section>
  );
}

export default SearchForm;