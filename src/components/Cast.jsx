import { useOutletContext } from 'react-router-dom';

const Cast = ({ cast }) => {
  cast = useOutletContext();
  const imageURL = 'https://image.tmdb.org/t/p/h100/';

  return (
    <ul>
      {cast.cast.map(person => (
        <li key={person.id}>
          {person.profile_path !== null ? (
            <img src={imageURL + person.profile_path} alt={person.name} />
          ) : (
            <span>No image</span>
          )}

          <span>{person.name}</span>
          <span>{person.character}</span>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
