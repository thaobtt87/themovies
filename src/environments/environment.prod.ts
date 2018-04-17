const API_TOKEN = "a7b3c9975791294647265c71224a88ad";
export const environment = {
  production: true,
  GENRE_URL : "https://api.themoviedb.org/3/genre/movie/list?api_key="+API_TOKEN+"&language=en-US",
  POPULAR_URL : "https://api.themoviedb.org/3/movie/popular?api_key="+API_TOKEN+"&language=en-US",
  TOPRATED_URL : "https://api.themoviedb.org/3/movie/top_rated?api_key="+API_TOKEN+"&language=en-US",
  UPCOMING_URL : "https://api.themoviedb.org/3/movie/upcoming?api_key="+API_TOKEN+"&language=en-US",   
};
