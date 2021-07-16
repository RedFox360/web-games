import Sketch from 'react-p5';
import GameTitle from '../../components/small/GameTitle';
import ufoImg from '../../images/ufo.png';
import './style.css';
export default function UFO() {
    let ufo: any;
    let randomXs: number[] = [];
    let randomYs: number[] = [];
    const preload = (p5: any) => {
        ufo = p5.loadImage(ufoImg);
        for (let i = 0; i < 50; i++) {
            randomXs.push(p5.random(20, 680));
            randomYs.push(p5.random(20, 580));
        }
    }

    const setup = (p5: any, canvasParentRef: any) => {
        p5.createCanvas(700, 600).parent(canvasParentRef);
    }

    let x = 50;
    let y = 50;
    let speedX = 6;
    let speedY = 3;

    const draw = (p5: any) => {
        p5.background(20, 20, 40);
        p5.noStroke();
        for (let i = 0; i < 50; i++) {
            p5.ellipse(randomXs[i], randomYs[i], 10, 10);
        }
        p5.image(ufo, x, y, 200, 150);
        x += speedX;
        y += speedY;


        if (x < 0 || x > p5.width - 200) {
            speedX = -speedX;
        }

        if (y > p5.height - 150 || y < 0) {
            speedY = -speedY;
        }
    }

    return (
        <div>
            <GameTitle> UFO </GameTitle>
            <div id="ufo-main">
                <Sketch draw={draw} setup={setup} preload={preload} />
            </div>
        </div>
    )
}