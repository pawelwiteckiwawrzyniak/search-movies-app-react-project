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

export default Cast;
