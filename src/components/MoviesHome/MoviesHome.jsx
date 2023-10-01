import { Link, useLocation } from 'react-router-dom';
import css from './MoviesHome.module.css';

const MoviesHome = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id} className={css.item}>
          <Link to={`movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesHome;
