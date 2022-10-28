import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDexterity,
  setHealth,
  setStrangth,
  setIntuition,
  setSkills,
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
    dispatch(setHealth(99));
  }

  const updateSkills = async () => {
    // const res = await api('/users/1/');

    // dispatch(setSkills({
    //     strength: res.data.strength,
    //     dexterity: res.data.dexterity,
    //     intuition: res.data.intuition,
    //     health: res.data.health,
    //     free_points: res.data.free_points,
    //     experience: res.data.experience,
    //     level: res.data.level
    // }))

    setEdit(free_points > 0);
  };

  useEffect(() => {
    updateSkills();
  }, []);

  const saveSkills = () => {
    // api(/users/1/updateSkills)
    setEdit(false);
  };

  return (
    <SkillsStyled>
      {" "}
      Skills:
      <h3>Level: {level}</h3>
      <h3>Experience: {experience}</h3>
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
