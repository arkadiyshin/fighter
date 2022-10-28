import React, { useEffect } from 'react';
import fighter from '../assets/images/fighter.png'
import fighter2 from '../assets/images/reversefighter.png'
import { FighterStyled } from './Fighter.styled';
import '../App.css'

export const Fight = () => {    
    
    return (
        <>

            <div className='flex'>
                <FighterStyled src={fighter} alt="" />
                <div className="flex2"> 
                        <h2>Attack</h2>
                        <label>
                            <input type="radio" name="attack" />
                            Head
                        </label>
                        <label>
                            <input type="radio" name="attack" />
                            Body
                        </label>
                        <label>
                            <input type="radio" name="attack" />
                            Legs
                        </label>                    
                </div>
                <div className="flex2">
                    <h2>Defence</h2>
                    <label>
                        <input type="radio" name="defence" />
                        Head
                    </label>
                    <label>
                        <input type="radio" name="defence" />
                        Body
                    </label>
                    <label>
                        <input type="radio" name="defence" />
                        Legs
                    </label>                    
                </div>
                <FighterStyled src={fighter2} alt="" />
            </div>
            <button className='punch'>Punch</button>
        </>

    )
}