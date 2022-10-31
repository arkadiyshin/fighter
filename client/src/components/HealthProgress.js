import { Line } from 'rc-progress';


export const HealthProgress = ({percent, health}) => {
    
    return (
        <>
        
        <Line percent={percent} strokeWidth={4} strokeColor={'#FF4B4B'} trailColor={'#242432'} >{health}</Line>
        </>
    )
}