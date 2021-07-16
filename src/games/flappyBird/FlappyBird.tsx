//Run the code to view the instructions
import Sketch from 'react-p5';
import GameTitle from '../../components/small/GameTitle';
import ResetButton from '../../components/small/ResetButton';
import flappyBirdImg from '../../images/flappybird_only.png';
import './style.css'

export default function FlappyBird() {
    let x = 50;
    let y = 250;
    let pipeX = 400;
    let gap = 120;
    let topHeight = 200;
    let velocity = -5.5
    let gravity = 0.2;
    let score = 0;
    let lost = false;
    let flappyBird: any;
    let time = 0;

    const preload = (p5: any) => {
        flappyBird = p5.loadImage(flappyBirdImg);
    }
    const setup = (p5: any, canvasParentRef: any) => {
        p5.frameRate(50);
        const canvas = p5.createCanvas(500, 500).parent(canvasParentRef);
        canvas.mousePressed(() => {
            velocity = -5.5;
        });
    }

    const draw = (p5: any) => {
        p5.background(36, 230, 237);
        time += 0.02;
        if (!lost) {
            p5.fill(255, 229, 61);
            p5.stroke(69, 68, 60);
            if (y < 0) y = 1;
            p5.image(flappyBird, x - 30, y, 40, 30);
            y += velocity;
            velocity += gravity;
            makePipe(p5);
            p5.fill(255, 229, 61);
            p5.textSize(25);
            p5.text(`Score: ${score}`, 50, 50)
            p5.text(`Time: ${time.toFixed(1)}s`, 50, 90)
            if (intersectsPipes() || y > p5.height) lost = true;
        }
        if (lost) {
            p5.textSize(30);
            p5.fill(0, 0, 0);
            p5.text(`Game Over!
    Your score was ${score}`, 100, 100);
        }
    }


    const makePipe = (p5: any) => {
        p5.fill(35, 217, 62);
        //bottom
        p5.rect(pipeX, topHeight + gap, 50, 450);
        //top
        p5.rect(pipeX, 0, 50, topHeight);
        pipeX -= 2;

        if (pipeX < -50) {
            pipeX = 550;
            topHeight = p5.random(150, 300);
            score++;
        }
    }

    const intersectsPipes = () => {
        if (y < topHeight && x > pipeX && x < pipeX + 50) {
            return true;
        } else if (y > topHeight + gap && x > pipeX && x < pipeX + 50) {
            return true;
        } else {
            return false;
        }
    }
    const reset = () => {
        x = 50;
        y = 250;
        pipeX = 400;
        gap = 150
        topHeight = 200;
        velocity = -6
        gravity = 0.2;
        score = 0;
        lost = false;
    }
    return (<div>
        <GameTitle> Flappy Bird </GameTitle> <div id="flappy-main">
            <Sketch setup={setup} draw={draw} preload={preload} />
            <ResetButton resetFunc={reset} />
            <button id="why-hello" onClick={() => {
                alert("The code is watching you... it knows where you live")
            }}> Why... hello </button>
        </div> </div>)
}