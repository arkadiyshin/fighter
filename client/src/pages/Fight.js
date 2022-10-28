import React, { useEffect, useState } from 'react';
import { Logo } from "../components/Logo";
import { FighterP, FighterStyled, FighterStyledImg } from './Fighter.styled';
import '../App.css'
import { getRandomEnemy, finishGame } from '../services/api';
import { useSelector } from "react-redux";

export const Fight = () => {

    const [enemy, setEnemy] = useState();
    const [defence, setDefence] = useState();
    const [attack, setAttack] = useState();
    const [playerHealth, setPlayerHealth] = useState(0);
    const [enemyHealth, setEnemyHealth] = useState(0);
    const bodyParts = ['head', 'body', 'legs'];

    const player = useSelector((state) => state.skillsSlice);

    //console.log(player)
    const initialEnemy = async () => {
        const newEnemy = await getRandomEnemy(player.level, player.level);
        setEnemy(newEnemy);
        setEnemyHealth(newEnemy.enemy_health * 10);
        setPlayerHealth(player.health)
    }

    useEffect(() => {
        initialEnemy();
    }, [])

    const punchHandler = async () => {

        // check if choosen defence and attack
        if (!defence) {
            console.log('Chose defence!')
            return;
        }
        if (!attack) {
            console.log('Chose attack!')
            return;
        }

        // random atack and deffence of enemy 
        const enemyDefenceIndex = Math.floor(Math.random() * 3);
        const enemyAttackIndex = Math.floor(Math.random() * 4) - 1;

        let enemyDamages = 0, playerDamages = 0;
        // calculate enemies damage and rest of health
        if (defence !== bodyParts[enemyAttackIndex]) {
            enemyDamages = enemy.enemy_strength;
            setPlayerHealth((health) => (health < enemyDamages) ? 0 : (health - enemyDamages))
        }


        // calculate players damage and rest of health
        if (attack !== bodyParts[enemyDefenceIndex]) {
            playerDamages = player.strength;
            setEnemyHealth((health) => (health < playerDamages) ? 0 : (health - playerDamages))
        }

        console.log(`enemyDamages ${enemyDamages}`);
        console.log(`playerDamages ${playerDamages}`);


        setDefence(undefined)
        setAttack(undefined)

        // if someone has 0 health - finish endpoint - go to result page
        setPlayerHealth( (health) => health )
        setEnemyHealth( (health) => health )

        if (!playerHealth || !enemyHealth) {

            //console.log('Finish');
            const gameResult = {
                player_id: player.id,
                player_health: playerHealth,
                enemy_id: enemy.enemy_id,
                enemy_health: enemyHealth
            }
            console.table(gameResult)
            const result = await finishGame(gameResult);
            console.table(result)
        }

    }


    const defenceOnChange = (e) => {
        setDefence(e.target.value)
    }

    const attackOnChange = (e) => {
        setAttack(e.target.value)
    }

    if (!enemy || !player) return null;

    return (
        <FighterStyled>
            <Logo />
            <div className='flex'>
            
                <FighterP>{playerHealth}</FighterP>
                <FighterStyledImg src={player.avatar_url} alt="" />
                <div className="flex2">
                    <h2>Defence</h2>
                    <label>
                        <input type="radio" name="defence" value='head' checked={defence === "head"} onChange={defenceOnChange} />
                        Head
                    </label>
                    <label>
                        <input type="radio" name="defence" value='body' checked={defence === "body"} onChange={defenceOnChange} />
                        Body
                    </label>
                    <label>
                        <input type="radio" name="defence" value='legs' checked={defence === "legs"} onChange={defenceOnChange} />
                        Legs
                    </label>
                </div>
                <div className="flex2">
                    <h2>Attack</h2>
                    <label>
                        <input type="radio" name="attack" value='head' checked={attack === "head"} onChange={attackOnChange} />
                        Head
                    </label>
                    <label>
                        <input type="radio" name="attack" value='body' checked={attack === "body"} onChange={attackOnChange} />
                        Body
                    </label>
                    <label>
                        <input type="radio" name="attack" value='legs' checked={attack === "legs"} onChange={attackOnChange} />
                        Legs
                    </label>
                </div>
                <FighterStyledImg src={enemy.enemy_avatar_url} alt="" />
                <FighterP>{enemyHealth}</FighterP>
            </div>
            <button className='punch' onClick={punchHandler}>Punch</button>
        </FighterStyled>

    )
}