import React from 'react'
import { useGetAllNowPlayingMoviesQuery } from '../Service/api'
import style from "./nowPlayingMovie.module.css"

const img = process.env.REACT_APP_MOVIE_IMAGES

const NowPlayingMovie = () => {
    const {data, isLoading, isError} = useGetAllNowPlayingMoviesQuery();
    console.log(data)
    console.log(isLoading)

    if(isLoading){
        return <div><h1>Loading...</h1></div>
    };
    if(isError){
        return <div><h1> An Error occured</h1></div>
    }
    return (
        <div className= {style.mainWrapper}>
            <div className={style.container}>
            {data?.results?.map((movie) =>(
                <div className={style.movie} key={movie.id}>
                    <img className={style.img} src={`${img}${movie.poster_path}`} alt={movie.overview}></img>
                    <div>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <p>{movie.release_date}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default NowPlayingMovie
