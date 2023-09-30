import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import BackLink from 'components/BackLink';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const [cast, setCast] = useState([]);
  const [review, setReview] = useState([]);
  const outlet = { cast: cast, review: review };

  const location = useLocation();
  const backToLink = location.state?.from ?? '/movies';

  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const apiKey = `?api_key=72798596a23321893a7ef47e798d0f72`;
  const imageURL = 'https://image.tmdb.org/t/p/w300/';

  useEffect(() => {
    fetchMovieById();
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

    return arrayOfGenres.join(' ');
  };

  return (
    <div>
      <BackLink to={backToLink}>Back</BackLink>
      <div>
        <img src={getPoster(movie.poster_path)} alt=""></img>
        <div>
          <h1>
            {movie.title} ({getDate(movie.release_date)})
          </h1>
          <span>User Average Vote: {movie.vote_average}</span>
          <h2>Overview</h2>
          <span>{movie.overview}</span>
          <h3>Genres</h3>
          <span>{getGenres(movie.genres)}</span>
        </div>
        <div>
          <span>Additional information</span>
          <ul>
            <li>
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
    </div>
  );
};

export default MovieDetails;
