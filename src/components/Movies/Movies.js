import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';
import { useEffect, useState } from 'react';

function Movies({
  hasTheUserSearched,
  moviesCards,
  onSubmit,
  onSaveMovie,
  onDeleteMovie,
  onFilter,
  isLoading,
  onChekIsCheckboxChecked,
  checked,
  isMovieInSaved,
  savedMovies,
  didTheUserSearch,
  isRequestSuccessful,
}) {
  const [moviesRequest, setMoviesRequest] = useState('');
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);

  const userRequest = localStorage.getItem('userRequest');

  useEffect(() => {
    setMoviesRequest(localStorage.getItem('userRequest'));
    setIsCheckBoxChecked(localStorage.getItem('IsCheckBoxChecked'));
    setFoundMovies(JSON.parse(localStorage.getItem('foundMovies')));
  }, []);

  return (
    <main className='movies'>
      <SearchForm
        onSubmit={onSubmit}
        onChekIsCheckboxChecked={onChekIsCheckboxChecked}
        onFilter={onFilter}
        checked={isCheckBoxChecked}
        moviesRequest={moviesRequest}
      />
      {isLoading && <Preloader />}
      {!isLoading && hasTheUserSearched && (
        <MoviesCardList
        moviesCards={moviesCards}
        buttonType='save'
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
        place='movies'
        isMovieInSaved={isMovieInSaved}
        savedMovies={savedMovies}
        isRequestSuccessful={isRequestSuccessful}
        />
      )}
    </main>
  );
}

export default Movies;