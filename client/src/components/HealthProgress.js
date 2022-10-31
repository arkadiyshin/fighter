import { Line } from 'rc-progress';


export const HealthProgress = ({percent, health}) => {
    
    return (
        <>
        {health}
        <Line percent={percent} strokeWidth={4} strokeColor={'#FF4B4B'} trailColor={'#242432'} ></Line>
        </>
    )
}