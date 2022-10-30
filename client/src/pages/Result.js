import { Link, useLocation } from "react-router-dom";
import { Logo } from "../components/Logo";

export const Result = () => {

    // LOGO
    // RESULT: YOU WIN | DRAW | YOU LOSE
    // message
    // button Go to main page
    const {state} = useLocation();
    const { result } = state;
    const messages = {
        win: {title: 'YOU WIN', message: 'Points of experience gained'},
        draw: {title: 'DRAW', message: 'The most exiting fight yet to come'},
        lose: {title: 'YOU LOOSE', message: 'Points of experience loose'},
    }
    //location.state.result
    console.log(state)
    return (
        <>
            <Logo />
            <p> {messages[result.fightResult].title}</p>
            <p> {messages[result.fightResult].message}</p>
            <p> { result.changeExperience } </p>
            <Link to='/main'><button>Go to main page</button></Link>
        </>
    )
}