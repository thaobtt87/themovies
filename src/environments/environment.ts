// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const API_TOKEN = "a7b3c9975791294647265c71224a88ad";
export const environment = {
  production: false,
  API_TOKEN: API_TOKEN,
  GENRE_URL : "https://api.themoviedb.org/3/genre/movie/list?api_key="+API_TOKEN+"&language=en-US",
  POPULAR_URL : "https://api.themoviedb.org/3/movie/popular?api_key="+API_TOKEN+"&language=en-US",
  TOPRATED_URL : "https://api.themoviedb.org/3/movie/top_rated?api_key="+API_TOKEN+"&language=en-US",
  UPCOMING_URL : "https://api.themoviedb.org/3/movie/upcoming?api_key="+API_TOKEN+"&language=en-US", 
  NOWPLAYING_URL : "https://api.themoviedb.org/3/movie/now_playing?api_key="+API_TOKEN+"&language=en-US",
};
