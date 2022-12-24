import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useParams } from 'react-router-dom';

import { ThemoviApi } from 'components/ThemoviApi/ThemoviApi';

export const Review = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      const getReview = async () => {
        const movieReview = await ThemoviApi.getReview(movieId);
        setReview(movieReview);
      };
      getReview();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <ul>
      {review.map(item => (
        <li>
          {item.author}
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};
