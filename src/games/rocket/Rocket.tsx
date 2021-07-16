import GameTitle from '../../components/small/GameTitle';
import Sketch from 'react-p5';
import './style.css';
import ResetButton from '../../components/small/ResetButton';

export default function Rocket() {
    let rocketX = 300;
    let rocketY = 490;
    let randomXs: number[] = [];
    let randomYs: number[] = [];

    const setup = (p5: any, canvasParentRef: any) => {
        p5.createCanvas(600, 600).parent(canvasParentRef);
        p5.background(0, 0, 40);
        p5.fill(255, 255, 255);
        for (let i = 0; i < 50; i++) {
            randomXs.push(p5.random(10, 590));
            randomYs.push(p5.random(10, 590));
        }
    }

    const draw = (p5: any) => {
        // 1. ▼ Write code BELOW this line to make stars ▼
        //    Example:
        //     circle(50, 50, 50)
        p5.background(0, 0, 40);
        p5.fill(255, 255, 255);
        for (let i = 0; i < 50; i++) {
            p5.circle(randomXs[i], randomYs[i], 10);
        }
        p5.fill(p5.random(255), 0, 0);
        p5.circle(rocketX, rocketY + 130, 90);
        p5.fill(248, 128, 0);
        p5.circle(rocketX, rocketY + 115, 70);
        p5.fill(255, 153, 0);
        p5.circle(rocketX, rocketY + 95, 35);
        p5.fill(100, 100, 100);
        p5.triangle(
            rocketX,
            rocketY + 10,
            rocketX + 50,
            rocketY + 100,
            rocketX - 50,
            rocketY + 100
        );
        // 2. ▼ Write code BELOW this line to make the rocket blast off ▼
        if (rocketY > 0) {
            rocketY -= 5;
        }
    }
    const reset = () => {
        window.location.reload();
    }
    return (<div>
        <GameTitle> Rocket </GameTitle>
        <div id="rocket-main">
            <Sketch draw={draw} setup={setup} />
            <ResetButton resetFunc={reset} />
        </div>
    </div>)
}