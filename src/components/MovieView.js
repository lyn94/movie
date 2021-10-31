import React from 'react';
import './movieview.css'

const MovieView = ({selectMovie, onOpen }) => {
    const { thumbUrl, movieNm, openDt, moviePrdtStat, movieType, watchGradeNm, showTs, repNationCd, director, genre, dtNm} = selectMovie
    
    return (
        <div className="view" onClick={onOpen}>
            <img src={thumbUrl} alt={movieNm} />
            <div>
                <h3>{ movieNm }</h3>
                <i>시놉시스를 보려면 클릭하세요.</i>
                <ul className="mt15">
                    <li><em>개봉일</em><p>{openDt}</p></li>
                    <li><em>제작상태</em><p>{moviePrdtStat}</p></li>
                    <li><em>영화구분</em><p>{movieType}</p></li>
                    <li><em>관람등급</em><p>{watchGradeNm}</p></li>
                    <li><em>상영시간</em><p>{showTs}분</p></li>
                    <li><em>제작국가</em><p>{repNationCd}</p></li>
                    <li><em>감독</em><p>{director}</p></li>
                    <li><em>장르</em><p>{genre}</p></li>
                    <li><em>배급사</em><p>{dtNm}</p></li>
                </ul>
            </div>
        </div>
    );
};

export default MovieView;