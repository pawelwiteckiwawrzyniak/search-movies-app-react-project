import { Link, useLocation } from 'react-router-dom';

const Movies = ({ movies, isHome }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Movies;
