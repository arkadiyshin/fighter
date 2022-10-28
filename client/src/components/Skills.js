import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDexterity, setHealth, setStrangth, setIntuition } from '../redux/skillsSlice';
import { SkillsStyled } from './Skills.styled';


export const Skills = (props)=> {
    const dispatch = useDispatch();
    const strength = useSelector ((state)=> state.skillsSlice.strength);
    const dexterity = useSelector ((state) => state.skillsSlice.dexterity);
    const intuition = useSelector((state) => state.skillsSlice.intuition);
    const health = useSelector ((state) => state.skillsSlice.health);

    function addStrength () {
        dispatch(setStrangth());
    };
    function addDexterity () {
        dispatch(setDexterity());
    };
    function addIntuition () {
        dispatch(setIntuition());
    };
    function addHealth () {
        dispatch(setHealth());
    };

    return(
        <SkillsStyled> Skills:            
            <li>
                Strength : {strength} <button onClick={addStrength}>+</button>
            </li>
            <li>
                Dexterity : {dexterity} <button onClick={addDexterity}>+</button>
            </li>
            <li>
                Intuition : {intuition} <button onClick={addIntuition}>+</button>
            </li>
            <li>
                Health : {health} <button onClick={addHealth}>+</button>
            </li>
            <h3>You have unallocated ability: 5</h3>
        </SkillsStyled>
    )
}