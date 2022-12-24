import axios from 'axios';

export const ThemoviApi = {
    
  API: {
    KEY: '2c56ca605d93fc994eb0f57dccfe3295',
    URL: 'https://api.themoviedb.org',
  },

  getMovieList: async function () {
    const { KEY, URL } = this.API;
    const URL_Trand = `${URL}/3/trending/movie/day?api_key=${KEY}`;
    const trandDay = await axios.get(URL_Trand);
    return trandDay.data.results;
  },

  getMovie: async function (id) {
    const { KEY, URL } = this.API;
    const URL_Movie = `${URL}/3/movie/${id}?api_key=${KEY}`;
    const searchMovie = await axios.get(URL_Movie);
    return searchMovie.data;
  },

  getActors: async function (id) {
    const { KEY, URL } = this.API;
    const URL_Actors = `${URL}/3/movie/${id}/credits?api_key=${KEY}`;
    const actors = await axios.get(URL_Actors);
    return actors.data.cast;
  },

  getReview: async function (id) {
    const { KEY, URL } = this.API;
    const URL_Actors = `${URL}/3/movie/${id}/reviews?api_key=${KEY}`;
    const actors = await axios.get(URL_Actors);
    return actors.data.results;
  },

  searchMovie: async function (query) {
    const { KEY, URL } = this.API;
    const URL_Search = `${URL}/3/search/movie/?api_key=${KEY}&query=${query}`;
    const search = await axios.get(URL_Search);
    return search.data.results;
  },
};
