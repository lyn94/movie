import React from 'react';
import MovieItem from './MovieItem';
import './movielist.css'

const MovieList = ({ movies, onMouseOver }) => {
    return (
        <div className="list">
            <table>
                <colgroup>
                    <col className="w1"></col>
                    <col className="w2"></col>
                    <col className="w3"></col>
                    <col className="w4"></col>
                    <col className="w5"></col>
                </colgroup>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>영화명</th>
                        <th>매출액</th>
                        <th>관객수</th>
                        <th>증감률</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map( movies => <MovieItem key={movies.rank} movies={movies} onMouseOver={onMouseOver} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MovieList;