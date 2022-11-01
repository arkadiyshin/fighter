import React from "react";
import arrowUp from "../assets/arrow_up.png";
import arrowRight from "../assets/arrow_right.png";
import arrowDown from "../assets/arrow_down.png";
import arrowLeft from "../assets/arrow_left.png";
import { ButtonsStyled } from "./Map.styled";
import { useSelector, useDispatch } from "react-redux";
import { moveDown,moveUp, moveRight, moveLeft } from "../redux/fighterSlice";


export const Buttons = () => {
    const dispatch = useDispatch();    

    function up() {
        dispatch(moveUp());
    };
    function right() {
        dispatch(moveRight());
    };
    function down() {
        dispatch(moveDown());
    };
    function left() {
        dispatch(moveLeft());
    };

    return (
        <ButtonsStyled>            
            <button onClick={up}><img src={arrowUp} alt="" /></button>
            <button onClick={right}><img src={arrowRight} alt="" /></button>
            <button onClick={down}><img src={arrowDown} alt="" /></button>
            <button onClick={left}><img src={arrowLeft} alt="" /></button>
        </ButtonsStyled>
    )
}