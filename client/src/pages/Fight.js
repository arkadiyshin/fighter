import React, { useEffect, useState } from 'react';
import { Logo } from "../components/Logo";
import { FighterDiv, FighterStyledImg, FighterButton, FighterP } from './Fighter.styled';
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
    const [log, setLog] = useState([]);
    const bodyParts = ['head', 'body', 'legs'];

    const player = useSelector((state) => state.skillsSlice);
    const navigate = useNavigate();

    //console.log(player)
    const initialEnemy = async () => {
        const newEnemy = await getRandomEnemy(player.level, player.level);
        setEnemy(newEnemy);
        setEnemyHealth(newEnemy.enemy_health);
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

        let logText = [];
        // check if choosen defence and attack
        if (!defence) {
            logText.push('Chose defence!')
            return;
        }
        if (!attack) {
            logText.push('Chose attack!')
            return;
        }

        // random atack and deffence of enemy 
        const enemyDefenceIndex = Math.floor(Math.random() * 3);
        const enemyAttackIndex = Math.floor(Math.random() * 3);
        // console.log(`defence`, enemyDefenceIndex)
        // console.log(`attack`, enemyAttackIndex)

        let enemyDamages = 0, playerDamages = 0;

        logText.push(`${enemy.enemy_name} hits ${player.username} in the ${bodyParts[enemyAttackIndex]}`);
        // calculate enemies damage and rest of health
        if (defence !== bodyParts[enemyAttackIndex]) {
            enemyDamages = enemy.enemy_strength;
            setPlayerHealth((health) => (health < enemyDamages) ? 0 : (health - enemyDamages))
            logText.push(`${player.username} gets ${enemyDamages} points of damage`);
        } else {
            logText.push(`${player.username} blocked a punch`);
        }

        logText.push(`${player.username} hits ${enemy.enemy_name} in the ${attack}`);
        // calculate players damage and rest of health
        if (attack !== bodyParts[enemyDefenceIndex]) {
            playerDamages = player.strength;
            setEnemyHealth((health) => (health < playerDamages) ? 0 : (health - playerDamages))
            logText.push(`${enemy.enemy_name} gets ${playerDamages} points of damage`);
        } else {
            logText.push(`${enemy.enemy_name} blocked a punch`);
        }

        // console.log(`enemyDamages ${enemyDamages}`);
        // console.log(`playerDamages ${playerDamages}`);


        setCheckFinish(true)
        setDefence(undefined)
        setAttack(undefined)
        setLog(logText);
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
            //console.table(gameResult)
            const result = await finishGame(gameResult);
            //console.table(result)
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
                    <FighterStyledImg src={player.avatar_url} alt="" />
                    <HealthProgress percent={playerHealth / player.health * 100} health={playerHealth} />
                </div>
                <FighterDiv >
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
                </FighterDiv>
                <div className='flex2'>
                    <FighterButton onClick={punchHandler} />
                    <div className='flex'>
                        <FighterP>
                            {log.map(text => <p> {text} </p>)}
                        </FighterP>
                    </div>
                </div>
                <FighterDiv>
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
                </FighterDiv>

                {/* <FighterP>{enemyHealth}</FighterP> */}
                <div className='flex2'>
                    <FighterStyledImg src={enemy.enemy_avatar_url} alt="" />
                    <HealthProgress percent={enemyHealth / enemy.enemy_health * 100} health={enemyHealth} />
                </div>
            </div>

            {/* <div className='flex'>
                <button onClick={punchHandler}><FighterButton className='flex' /></button>
            </div> */}
        </>

    )
}