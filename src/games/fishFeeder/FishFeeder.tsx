import Sketch from 'react-p5';
import GameTitle from '../../components/small/GameTitle';
import ResetButton from '../../components/small/ResetButton';
import './style.css';

export default function FishFeeder() {
    let foodX = 100;
    let foodY = 20;
    let score = 0;
    let won = false;
    //Run this program to view instructions
    const setup = (p5: any, canvasParentRef: any) => {
        p5.createCanvas(400, 400).parent(canvasParentRef);
    }

    const draw = (p5: any) => {
        p5.background(141, 233, 237);
        drawFish(p5);
        if (!won) {
            p5.fill(224, 144, 83);
            p5.noStroke();
            p5.ellipse(foodX, foodY, 20, 20);
            let amount = Math.floor(score / 3);
            if (amount < 3) amount = 3;
            foodY += amount;
            if (foodY > p5.height) {
                foodX = p5.random(p5.width - 20);
                foodY = 20;
                if (score > 0) score--;
            }
            checkCatch(p5, foodX, foodY);
            p5.fill(0, 0, 0);
            p5.textSize(16);
            p5.text(`Score: ${score}`, 40, 40);
            p5.text("You got this! You're doing so well!", 100, 300);
        }
        p5.fill(0, 0, 0);
        if (score >= 20) {
            p5.textSize(30);
            p5.text("YOU WON!", 100, 100);
            won = true;
        }
    }
    const drawFish = (p5: any) => {
        p5.noStroke();
        p5.fill(255, 255, 255);
        p5.ellipse(p5.mouseX - 17, p5.mouseY - 17, 20, 20); //back side eye
        p5.fill(255, 200, 88);
        p5.ellipse(p5.mouseX, p5.mouseY, 90, 50); //body
        p5.triangle(
            p5.mouseX + 30,
            p5.mouseY,
            p5.mouseX + 70,
            p5.mouseY + 30,
            p5.mouseX + 70,
            p5.mouseY - 30
        ); //tail
        p5.stroke(0);
        p5.triangle(p5.mouseX, p5.mouseY, p5.mouseX + 15, p5.mouseY + 10, p5.mouseX + 15, p5.mouseY - 10); //side fin
        p5.noStroke();
        p5.fill(255, 200, 88);
        p5.ellipse(p5.mouseX, p5.mouseY, 15, 15); //side fin cover
        p5.noStroke();
        p5.fill(255, 255, 255);
        p5.ellipse(p5.mouseX - 25, p5.mouseY - 15, 20, 20); //front eye
        p5.fill(0, 0, 0);
        p5.ellipse(p5.mouseX - 25, p5.mouseY - 15, 5, 5); //pupil
        p5.fill(141, 233, 237);
        p5.ellipse(p5.mouseX - 45, p5.mouseY, 25, 25); //mouth
    }
    const checkCatch = (p5: any, x: number, y: number) => {
        if (x > p5.mouseX && x < p5.mouseX + 70) {
            if (y > p5.mouseY - 17 && y < p5.mouseY + 30) {
                score++;
                foodY = 20; //if the food was eaten, make more food fall from the top
                foodX = p5.random(p5.width - 20);
            }
        } else if (foodY > p5.height && score > 0) {
            score--;
        }
    }
    const reset = () => {
        foodX = 100;
        foodY = 20;
        score = 0;
        won = false;
    }
    return <div>
        <GameTitle> Fish Feeder </GameTitle>
        <div id="fish-main">
            <Sketch draw={draw} setup={setup} />
            <ResetButton resetFunc={reset} />
        </div>
    </div>

}