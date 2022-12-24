import { useEffect, useState } from 'react';
import { Routes, Route, NavLink, useParams } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Movies } from '../../pages/Movies/Movies';
import { ThemoviApi } from 'components/ThemoviApi/ThemoviApi';
import { Layout } from 'components/Layout/Layout';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Cast } from 'components/Cast/Cast';
import { Review } from 'components/Review/Review';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/:movieId" element={<MovieItem />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="movies" element={<Movies />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </>
  );
};
