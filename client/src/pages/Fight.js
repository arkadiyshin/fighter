import React from 'react';
import fighter from '../assets/images/fighter.png'
import fighter2 from '../assets/images/reversefighter.png'
import { FighterStyled } from './Fighter.styled';
import '../App.css'

export const Fight = ()=> {
    return(
        <>
            
            <div className='flex'>
                <div className="flex2">
                    <FighterStyled src={fighter} alt="" />
                    <h2>Attack</h2>
                    <div className='checkbox'>
                        <label>
                            <input type="checkbox" name="Head"/>
                            Head
                        </label>
                        <label>
                            <input type="checkbox" name="Body"/>
                            Body
                        </label>
                        <label>
                            <input type="checkbox" name="Legs"/>
                            Legs
                        </label>
                    </div>
                </div>
                <div className="flex2">                    
                    <h2>Defence</h2>
                    <label>
                        <input type="checkbox" name="Head"/>
                        Head
                    </label>
                    <label>
                        <input type="checkbox" name="Body"/>
                        Body
                    </label>
                    <label>
                        <input type="checkbox" name="Legs"/>
                        Legs
                    </label>
                    <FighterStyled src={fighter2} alt="" />
                </div>
            </div>
        </>
        
    )
}