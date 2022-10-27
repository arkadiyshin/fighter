import React from 'react';
import { SkillsStyled } from './Skills.styled';


export const Skills = ()=> {
    return(
        <SkillsStyled> Skills:            
            <li>
                Strength : 7 <button>+</button>
            </li>
            <li>
                Dexterity : 3 <button>+</button>
            </li>
            <li>
                Intuition : 5 <button>+</button>
            </li>
            <li>
                Health : 60 <button>+</button>
            </li>
            <h3>You have unallocated ability: 5</h3>
        </SkillsStyled>
    )
}