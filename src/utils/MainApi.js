class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._credentials = options.credentials;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    // В случае если ошибка, то отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(endpoint, options) {
    return fetch(`${this._baseUrl}${endpoint}`, options).then(this._checkResponse);
  }

  getUserInfo() {
    return this._request('/users/me', {
      credentials: this._credentials,
      headers: this._headers,
    });
  }

  editProfile(name, email) {
    return this._request('/users/me', {
      method: 'PATCH',
      credentials: this._credentials,
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
      }),
    });
  }

  getSavedMovies() {
    return this._request('/movies', {
      headers: this._headers,
    });
  }

  addNewMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  }) 
  {
    return this._request('/movies', {
      method: 'POST',
      credentials: this._credentials,
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
      }),
    });
  }

  deleteMovie(movieId) {
    return this._request(`/movies/${movieId}`, {
      method: 'DELETE',
      credentials: this._credentials,
      headers: this._headers,
    });
  }

  register = (name, email, password) => {
    return this._request(`/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    });
  };

  authorize = (email, password) => {
    return this._request(`/signin`, {
      method: 'POST',
      credentials: this._credentials,
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    });
  };

  signout = () => {
    return this._request(`/signout`, {
      method: 'GET',
      credentials: this._credentials,
      headers: this._headers,
    });
  };

  getContent = () => {
    return this._request(`/users/me`, {
      method: 'GET',
      credentials: this._credentials,
      headers: this._headers,
    })
      .then((res) => res.json())
      .then((data) => data);
  };
}

// Создаём экземпляр класса Api
const mainApi = new MainApi({
  baseUrl: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'include', // теперь куки посылаются вместе с запросом
});

export default mainApi;