import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDexterity,
  setHealth,
  setStrangth,
  setIntuition,
} from "../redux/skillsSlice";
import api from "../services/api";
import { SkillsStyled } from "./Skills.styled";

export const Skills = (props) => {
  const dispatch = useDispatch();
  const strength = useSelector((state) => state.skillsSlice.strength);
  const dexterity = useSelector((state) => state.skillsSlice.dexterity);
  const intuition = useSelector((state) => state.skillsSlice.intuition);
  const health = useSelector((state) => state.skillsSlice.health);
  const free_points = useSelector((state) => state.skillsSlice.free_points);
  const experience = useSelector((state) => state.skillsSlice.experience);
  const level = useSelector((state) => state.skillsSlice.level);
  const id = useSelector((state) => state.skillsSlice.id);

  const [edit, setEdit] = useState(false);

  function addStrength() {
    dispatch(setStrangth());
  }
  function addDexterity() {
    dispatch(setDexterity());
  }
  function addIntuition() {
    dispatch(setIntuition());
  }
  function addHealth() {
    dispatch(setHealth());
  }

  const updateSkills = async () => {
    setEdit(free_points > 0);
  };

  useEffect(() => {
    updateSkills();
  }, []);

  const saveSkills = async () => {
    const body = {
      free_points,
      health: health / 10,
      strength,
      dexterity,
      intuition,
    };

    const res = await api.put(`users/${id}/skills`, body);
    console.log(res);
  };

  return (
    <SkillsStyled>
      <h3>Level: {level}</h3>
      <h3>Experience: {experience}</h3>
      <h2>Skills:</h2>
      <li>
        Strength : {strength} {edit && <button onClick={addStrength}>+</button>}
      </li>
      <li>
        Dexterity : {dexterity}{" "}
        {edit && <button onClick={addDexterity}>+</button>}
      </li>
      <li>
        Intuition : {intuition}{" "}
        {edit && <button onClick={addIntuition}>+</button>}
      </li>
      <li>
        Health : {health} {edit && <button onClick={addHealth}>+</button>}
      </li>
      {edit && (
        <div>
          <h3>You have unallocated ability: {free_points}</h3>
          <button onClick={saveSkills}> Save </button>
        </div>
      )}
    </SkillsStyled>
  );
};
