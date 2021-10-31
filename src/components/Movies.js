import React, { useState } from 'react';
import '../utils/css/reset.css'
import data from '../utils/api/movie.json'
import MovieView from './MovieView';
import MovieList from './MovieList';
import Modal from './Modal';

const Movies = () => {
    const [ movies, setMovies ] = useState(data)
    const [ selectMovie, setSelectMovie ] = useState(data[0])
    const [ isActive, setIsActive ] = useState(false)

    const onMouseOver = (rank) => {
        setSelectMovie(movies.find( movieItem => movieItem.rank === rank))
    }

    const onOpen = () => {
        setIsActive(true)
    }
    const onClose = () => {
        setIsActive(false)
    }

    return (
        <div className="Movie">
            <div className="TitleBox">
                <h1 className="Title">Movie List</h1>
                <i className="Explain">영화 리스트 위에 마우스를 올리면 정보를 보실 수 있습니다.</i>
            </div>
            <div className="MovieGallery">
                <MovieView selectMovie={selectMovie} onOpen={onOpen} />
                <MovieList movies={movies} onMouseOver={onMouseOver} />
                { isActive && <Modal selectMovie={selectMovie} onClose={onClose} /> }
            </div>
        </div>
    );
};

export default Movies;