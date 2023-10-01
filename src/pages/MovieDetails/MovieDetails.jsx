import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import BackLink from 'components/BackLink/BackLink';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const [cast, setCast] = useState([]);
  const [review, setReview] = useState([]);
  const [location, setLocation] = useState();
  const outlet = { cast: cast, review: review };

  const locationParams = useLocation();

  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const apiKey = `?api_key=72798596a23321893a7ef47e798d0f72`;
  const imageURL = 'https://image.tmdb.org/t/p/w300/';

  useEffect(() => {
    fetchMovieById();
    setLocation(locationParams.state?.from ?? '/goit-react-hw-05-movies/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMovieById = async () => {
    try {
      const response = await fetch(
        url + apiKey + '&append_to_response=credits,reviews'
      );
      const data = await response.json();
      setMovie(data);
      setCast(data.credits.cast);
      setReview(data.reviews.results);
    } catch (error) {
      console.error(error);
    }
  };

  const getPoster = posterPath =>
    posterPath !== undefined ? imageURL + posterPath : '';

  const getDate = date => (date !== undefined ? date.split('-')[0] : '');

  const getGenres = genres => {
    if (genres === undefined) {
      return 'No data';
    }
    const arrayOfGenres = [];
    for (const genre of genres) {
      arrayOfGenres.push(genre.name);
    }

    return arrayOfGenres.join(' | ');
  };

  return (
    <div className={css.box}>
      <BackLink to={location}>Go Back</BackLink>
      <div className={css.main}>
        <img src={getPoster(movie.poster_path)} alt=""></img>
        <div className={css.details}>
          <h1>
            {movie.title} ({getDate(movie.release_date)})
          </h1>
          <span className={css.span}>
            User Average Vote: {movie.vote_average}
          </span>
          <h2>Overview</h2>
          <span className={css.span}>{movie.overview}</span>
          <h3>Genres</h3>
          <span className={css.span}>{getGenres(movie.genres)}</span>
        </div>
      </div>
      <div className={css.info}>
        <h3>Additional information</h3>
        <ul className={css.list}>
          <li className={css.list_item}>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet context={outlet} />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
