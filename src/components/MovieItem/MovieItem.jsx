import { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/system';
import { useLocation, Outlet, NavLink, useParams } from 'react-router-dom';
import { Link, Section } from '../../pages/Home/HomeStyled';

import { ThemoviApi } from 'components/ThemoviApi/ThemoviApi';

export const MovieItem = () => {
  const [film, setFilm] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const goBackHref = useRef(location.state?.from ?? '/');
  //   console.log(location.state.from);

  //   console.log(goBackHref);

  useEffect(() => {
    try {
      const movieDetail = async () => {
        const movie = await ThemoviApi.getMovie(movieId);
        setFilm(movie);
      };
      movieDetail();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

  return (
    <Box display="flex" flexDirection="column">
      {film !== null && (
        <Box display="flex" borderBottom="1px solid grey" p="5px">
          <Box p="5px">
            <Link to={goBackHref.current}>go back</Link>
            <img
              src={IMG_URL + film.poster_path}
              alt={film.title}
              style={{ width: '150px' }}
            />
          </Box>

          <Box p="5px">
            <h1>
              {film.title} <span>({film.release_date.split('-')[0]})</span>
            </h1>
            <p>User Score:</p>
            <h2>Overview:</h2>
            <p>{film.overview}</p>
            <h2>Genres:</h2>
            <p>{film.genres.map(item => `${item.name} `)}</p>
          </Box>
        </Box>
      )}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="review">Review</NavLink>
        </li>
      </ul>
      <Outlet />
    </Box>
  );
};
