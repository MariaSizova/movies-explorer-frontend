import useForm from '../../hooks/useForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onFindMovies, onChekIsCheckboxChecked, checked, onFilter, isLoading, userRequest }) {
  const { values, errors, formValid, onChange } = useForm();
  const submitButtonDisable = isLoading || !formValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    onFindMovies(values.search);
  };

  return (
    <section className='search-form'>
      <div className='search-form__content'>
        <form className='search-form__form' name='search-form' onSubmit={handleSubmit} noValidate>
          <button className='search-form__icon'></button>
          <input
            className='search-form__input'
            type='search'
				value={values.search || userRequest || ''}
				onChange={onChange}
            name='search'
            id='search'
            placeholder='Фильм'
            autoComplete='off'
            minLength='1'
            required
          />
          <button className='search-form__submit-button' type='submit' disabled={submitButtonDisable}></button>
          </form>
        <FilterCheckbox onChekIsCheckboxChecked={onChekIsCheckboxChecked} checked={checked} onFilter={onFilter}/>
      </div>
    </section>
  );
}

export default SearchForm;