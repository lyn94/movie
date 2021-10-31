import React from 'react';
import './modal.css'
import { AiOutlineClose } from "react-icons/ai";


const Modal = ({selectMovie, onClose}) => {
    const { thumbUrl, movieNm, director, synop } = selectMovie
    return (
        <div className="modal">
            <div className="bg" onClick={onClose}></div>
            <div className="popup">
                <h2>{ movieNm }</h2>
                <div>
                    <img src={thumbUrl} alt={movieNm} />
                </div>            
                <h3>감독 : {director} </h3>
                <em>{ synop }</em>
                <p className="closeBtn" onClick={onClose}>
                    <AiOutlineClose />
                </p>                
            </div>

            
        </div>
    );
};

export default Modal;