import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDexterity, setHealth, setStrangth, setIntuition, setSkills } from '../redux/skillsSlice';
import api from '../services/api';
import { SkillsStyled } from './Skills.styled';


export const Skills = (props) => {
    const dispatch = useDispatch();
    const strength = useSelector((state) => state.skillsSlice.strength);
    const dexterity = useSelector((state) => state.skillsSlice.dexterity);
    const intuition = useSelector((state) => state.skillsSlice.intuition);
    const health = useSelector((state) => state.skillsSlice.health);
    const free_points = useSelector((state) => state.skillsSlice.free_points);
    const experience = useSelector((state) => state.skillsSlice.experience);
    const level = useSelector((state) => state.skillsSlice.level);

    function addStrength() {
        dispatch(setStrangth());
    };
    function addDexterity() {
        dispatch(setDexterity());
    };
    function addIntuition() {
        dispatch(setIntuition());
    };
    function addHealth() {
        dispatch(setHealth(99));
    };

    const updateSkills = async () => {
        
        const res = await api('/users/1/');

        dispatch(setSkills({
            strength: res.data.strength,
            dexterity: res.data.dexterity,
            intuition: res.data.intuition,
            health: res.data.health,
            free_points: res.data.free_points,
            experience: res.data.experience,
            level: res.data.level
        }))
    }
    
    useEffect( () => {
        updateSkills();
    }, [])

    return (
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
            <h3>You have unallocated ability: {free_points}</h3>
            <h3>Level: {level}</h3>
            <h3>Experience: {experience}</h3>
        </SkillsStyled>
    )
}