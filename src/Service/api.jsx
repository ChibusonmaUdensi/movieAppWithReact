import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.REACT_APP_MOVIE_BASE_URL
const apiKey = process.env.REACT_APP_API_KEY

console.log(baseUrl )
console.log(apiKey)

export const movieApi = createApi({
    reducerPath: 'movie', // This should match with how you set up your store
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getAllPopularMovies: builder.query({
        query: () => `/popular?api_key=${apiKey}`,
      }),
      getAllNowPlayingMovies: builder.query({
        query: () => `/now_playing?api_key=${apiKey}`,
      }),
    }),
  });
  



export const {useGetAllNowPlayingMoviesQuery, useGetAllPopularMoviesQuery} = movieApi;

