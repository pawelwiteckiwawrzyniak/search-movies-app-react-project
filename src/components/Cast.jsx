import { useOutletContext } from 'react-router-dom';

export const Cast = ({ cast }) => {
  cast = useOutletContext();
  return (
    <ul>
      {cast.map(person => (
        <li key={person.id}>
          <img
            src={'https://image.tmdb.org/t/p/w500' + person.profile_path}
            alt={person.name}
          />
          <span>{person.name}</span>
          <span>{person.character}</span>
        </li>
      ))}
    </ul>
  );
};
