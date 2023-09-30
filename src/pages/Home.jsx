import { useState, useEffect } from 'react';
import { Movies } from 'components/Movies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/trending/movie/day`;
  const apiKey = '?api_key=72798596a23321893a7ef47e798d0f72';

  useEffect(() => {
    fetchTrendingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTrendingMovies = async () => {
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
      <Movies isHome={true} movies={movies} />
    </div>
  );
};

export default Home;
