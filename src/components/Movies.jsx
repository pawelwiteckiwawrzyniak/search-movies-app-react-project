import { Link, useLocation } from 'react-router-dom';

export const Movies = ({ movies, isHome }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          {isHome ? (
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          ) : (
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};
