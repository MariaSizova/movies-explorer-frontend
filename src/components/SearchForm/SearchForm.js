import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search-form'>
      <div className='search-form__content'>
        <form className='search-form__form'>
		  <button className='search-form__icon'></button>
          <input
            className='search-form__input'
            type='text'
            name='search'
            id='search'
            placeholder='Фильм'
            autoComplete='off'
            required
          />
          <button className='search-form__submit-button' type='submit'>&#62;</button>
        
        <FilterCheckbox />
		  </form>
      </div>
    </section>
  );
}

export default SearchForm;