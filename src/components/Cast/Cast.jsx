import PropTypes from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = ({ context }) => {
  context = useOutletContext();
  const imageURL = 'https://image.tmdb.org/t/p/h100/';
  return (
    <ul>
      {context.cast.map(person => (
        <li key={person.id}>
          {person.profile_path !== null ? (
            <img
              src={imageURL + person.profile_path}
              alt={person.name}
              className={css.image}
            />
          ) : (
            <img
              src="https://via.placeholder.com/67x100"
              alt={person.name}
              className={css.image}
            />
          )}
          <span className={css.info}>{person.name}</span>
          <span className={css.info}>{person.character}</span>
        </li>
      ))}
    </ul>
  );
};

Cast.propTypes = {
  context: PropTypes.shape({
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        profile_path: PropTypes.string,
        name: PropTypes.string,
      })
    ),
  }),
};

export default Cast;
