import { useState, useEffect } from 'react';
import { Movies } from 'components/Movies';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/day`;
    const apiKey = '?api_key=72798596a23321893a7ef47e798d0f72';
    try {
      const response = await fetch(url + apiKey);
      const data = await response.json();
      const trendingMovies = [...data.results];
      setMovies(trendingMovies);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Trending today</h1>
      <Movies movies={movies} />
    </div>
  );
};
