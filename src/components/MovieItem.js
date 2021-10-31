import React from 'react';
import Numeral from "numeral";
import { BiCaretUp, BiCaretDown, BiDotsHorizontal } from "react-icons/bi";

const MovieItem = ({movies, onMouseOver }) => {
    const {rank, movieNm, audiCnt, salesAmt, rankInten} = movies

    return (
        <tr onMouseOver={ () => onMouseOver(rank)}>
            <td>{rank}</td>
            <td>{movieNm}</td>
            <td>{Numeral(salesAmt).format(0,0)}원</td>
            <td>{Numeral(audiCnt).format(0,0)}명</td>
            <td>
                { rankInten > 0 && <BiCaretUp color="red" /> }
                { rankInten === 0 && <BiDotsHorizontal color="gray" /> }
                { rankInten < 0 && <BiCaretDown style={{color:'blue'}} /> }
                {rankInten}
            </td>
        </tr>
    );
};

export default MovieItem;