import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useParams } from 'react-router-dom';

import { ThemoviApi } from 'components/ThemoviApi/ThemoviApi';

export const Cast = () => {
  const [acters, setActers] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      const actersList = async () => {
        const list = await ThemoviApi.getActors(movieId);
        setActers(list);
      };
      actersList();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

  return (
    <ul>
      {acters.length > 0 && acters.map(item => (
        <li>
          <img
            src={IMG_URL + item.profile_path}
            alt={item.character}
            width="100px"
          />
          <p>{item.original_name}</p>
        </li>
      ))}
    </ul>
  );
};
