import React, { useEffect, useState } from 'react';
import { Logo } from "../components/Logo";
import { FighterP, FighterStyledImg, FighterButton } from './Fighter.styled';
import '../App.css'
import { getRandomEnemy, finishGame } from '../services/api';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { HealthProgress } from '../components/HealthProgress';

export const Fight = () => {

    const [checkFinish, setCheckFinish] = useState(false);
    const [enemy, setEnemy] = useState();
    const [defence, setDefence] = useState();
    const [attack, setAttack] = useState();
    const [playerHealth, setPlayerHealth] = useState(0);
    const [enemyHealth, setEnemyHealth] = useState(0);
    const bodyParts = ['head', 'body', 'legs'];

    const player = useSelector((state) => state.skillsSlice);
    const navigate = useNavigate();

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

    useEffect(() => {

        if (checkFinish) {
            checkFinishFight();
        }

        setCheckFinish(false);

    }, [checkFinish])

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


        setCheckFinish(true)
        setDefence(undefined)
        setAttack(undefined)

    }

    const checkFinishFight = async () => {

        // if someone has 0 health - finish endpoint - go to result page
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
            navigate('/result', { state: { result } })
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
        <>
            <Logo />
            <div className='flex'>

                {/* <FighterP>{playerHealth}</FighterP> */}
                <div className='flex2'>
                    <HealthProgress percent={ playerHealth / player.health * 100} health={playerHealth}/>
                    <FighterStyledImg src={player.avatar_url} alt="" />
                </div>

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
                
                <FighterButton className='flex2' onClick={punchHandler} />

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
                
                {/* <FighterP>{enemyHealth}</FighterP> */}
                <div className='flex2'>
                    <HealthProgress percent={ enemyHealth / enemy.enemy_health * 100} health={enemyHealth}/>
                    <FighterStyledImg src={enemy.enemy_avatar_url} alt="" />
                </div>
            </div>
            {/* <div className='flex'>
                <button onClick={punchHandler}><FighterButton className='flex' /></button>
            </div> */}
        </>

    )
}