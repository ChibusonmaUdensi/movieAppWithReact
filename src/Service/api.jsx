import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.REACT_APP_MOVIE_BASE_URL
const apiKey = process.env.REACT_APP_API_KEY

console.log(baseUrl )
console.log(apiKey)

//https://api.themoviedb.org/3/movie/popular?api_key=717ccf6765dcaa577801cadcc372f394

export const movieApi = createApi({
    reducerPath: "movie",
    baseQuery: fetchBaseQuery({baseUrl: `${baseUrl}`}),
    endpoints: (builder)=>({
        useGetAllPopularMoviesQuery:builder.query,
        getAllNowPlayingMovies: builder.query({
            query: ()=>(`/now_playing?api_key=${apiKey}`),
        }),
    }),
});



export const {useGetAllNowPlayingMoviesQuery, useGetAllPopularMoviesQuery} = movieApi;
