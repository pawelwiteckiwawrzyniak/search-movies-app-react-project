import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm';
import { Movies } from 'components/Movies';

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const movieTitle = searchParams.get('query') ?? '';
  const url = `https://api.themoviedb.org/3/search/movie`;
  const apiKey = `?api_key=72798596a23321893a7ef47e798d0f72&${searchParams}`;

  useEffect(() => {
    fetchSearchedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const fetchSearchedMovies = async () => {
    try {
      const response = await fetch(url + apiKey);
      const data = await response.json();
      const searchedMovies = [...data.results];
      setMovies(searchedMovies);
    } catch (error) {
      console.error(error);
    }
  };

  const visibleMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(movieTitle.toLowerCase())
  );

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchQuery = form.elements.searchQuery.value;
    const params = 'query=' + searchQuery;
    setSearchParams(params);
  };

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      <Movies movies={visibleMovies} />
    </div>
  );
};

export default SearchMovies;
