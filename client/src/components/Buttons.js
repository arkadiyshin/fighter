import React, { useEffect } from "react";
import arrowUp from "../assets/arrow_up.png";
import arrowRight from "../assets/arrow_right.png";
import arrowDown from "../assets/arrow_down.png";
import arrowLeft from "../assets/arrow_left.png";
import { ButtonsStyled, ButtonDown, ButtonLeft, ButtonRight, ButtonUp } from "./Map.styled";
import { useDispatch } from "react-redux";
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
    useEffect(() => {
        const onKeypress = e => {             
            if (e.code == "ArrowLeft") {                
                left()
            } else if (e.code == "ArrowUp"){                
                up()
            } else if (e.code == "ArrowRight"){                
                right()
            } else if (e.code == "ArrowDown"){                
                down();
            }                       
        };
        document.addEventListener('keydown', onKeypress)        
      
        return () => {
            document.removeEventListener('keydown', onKeypress);         
        };
      }, []);

    return (
        <div>
            <ButtonsStyled>            
                <ButtonUp><button onClick={up}><img src={arrowUp} alt="" /></button></ButtonUp>
                <ButtonLeft><button onClick={left}><img src={arrowLeft} alt="" /></button></ButtonLeft>
                <ButtonRight><button onClick={right}><img src={arrowRight} alt="" /></button></ButtonRight>                
                <ButtonDown><button onClick={down}><img src={arrowDown} alt="" /></button></ButtonDown>                
            </ButtonsStyled>
        </div>
    )
}