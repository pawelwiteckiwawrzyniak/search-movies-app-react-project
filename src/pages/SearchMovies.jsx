import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbox } from 'components/Searchbox';
import { Movies } from 'components/Movies';

export const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const movieTitle = searchParams.get('query') ?? '';

  const fetchSearchedMovies = async searchParams => {
    const url = `https://api.themoviedb.org/3/search/movie`;
    const apiKey = `?api_key=72798596a23321893a7ef47e798d0f72&query=${searchParams}`;
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

  return (
    <div>
      <Searchbox onChange={fetchSearchedMovies} />
      <Movies movies={visibleMovies} />
    </div>
  );
};
