import Sketch from 'react-p5';
import GameTitle from '../../components/small/GameTitle';
import ResetButton from '../../components/small/ResetButton';
import './style.css';
interface Point {
    x: number;
    y: number;
}
export default function LunarLander() {
    let gravity = 0.02;
    let veloc = -0.8;
    let updateVeloc = true;
    let rover = {
        x: 80,
        y: 80
    };
    let fuel = 500;
    let terrain: Point[] = [];
    let gameOver = false;
    const setup = (p5: any, canvasParentRef: any) => {
        p5.createCanvas(1000, 700).parent(canvasParentRef);
        for (let i = 0; i < 12; i++) {
            terrain.push({
                x: i * 100,
                y: Math.min(p5.noise(i) * (p5.height * 0.4) + (p5.height / 2), 500)
            })
        }
    }

    const draw = (p5: any) => {
        p5.background(0, 0, 0);
        p5.textFont('Courier');
        if (fuel <= 0) {
            p5.textSize(60);
            p5.stroke(0, 0, 255);
            p5.fill(0, 0, 255);
            p5.text("You ran out of fuel!", 200, 350);
            gameOver = true;
            updateVeloc = false;
        }
        if (updateVeloc) {
            rover.y += veloc;
            veloc += gravity;
            if (rover.y < 0) {
                rover.y = 0;
                veloc = 0;
            }
            if (rover.x < 10) {
                rover.x = 10;
            }
            if (rover.x > p5.width - 10) {
                rover.x = p5.width - 10;
            }
        }
        // landscape
        // p5.rect(0, 660, 1000, 60);
        for (let i = 0; i < terrain.length - 1; i++) {
            p5.stroke(255, 255, 255);
            let point1 = terrain[i];
            let point2 = terrain[i + 1];
            p5.line(point1.x, point1.y, point2.x, point2.y);
        }
        p5.textSize(20);
        p5.stroke(255, 255, 255);
        p5.fill(255, 255, 255);
        p5.text(`Velocity: ${Math.round(veloc * 10)}`, 800, 50);
        p5.text(`Altitude: ${Math.round(p5.height - rover.y)}`, 800, 100);
        p5.text(`Fuel: ${Math.round(fuel)}`, 800, 150)
        // lunar lander
        p5.stroke(0, 0, 0);
        p5.rect(rover.x, rover.y, 20, 50);
        if (p5.keyIsPressed && !gameOver) {
            // up
            if (p5.keyCode === 38) {
                veloc -= 0.08;
                fuel -= 0.2;
            }
            // left
            else if (p5.keyCode === 37) {
                rover.x -= 1.5;
                fuel -= 0.2;
            }
            // right
            else if (p5.keyCode === 39) {
                rover.x += 1.5;
                fuel -= 0.2;
            }
        }
        const t = touches();
        if (t.landed) {
            p5.textSize(100);
            if (t.won) {
                p5.fill(0, 255, 0);
                p5.text("You won!", 300, 350);
                p5.fill(255, 255, 255);
            } else {
                p5.fill(255, 0, 0);
                p5.text("You crashed!", 150, 350);
                p5.fill(255, 255, 255);
            }
            updateVeloc = false;
            gameOver = true;
        }
    }



    const touches = () => {
        let index = Math.floor(rover.x / 100);
        let point1 = terrain[index];
        let point2 = terrain[index + 1];
        let bottom = rover.y + 50;
        let yDistance = Math.abs(point2.y - point1.y);
        let yLoc = ((point2.y - point1.y) / (point2.x - point1.x)) * (rover.x - point1.x) + point1.y;
        if (bottom > yLoc) {
            updateVeloc = false;
            return {
                landed: true,
                won: veloc <= 1 && yDistance <= 30
            };
        } else {
            return {
                landed: false
            };
        }
    }
    const reset = () => {
        gravity = 0.02;
        veloc = -0.8;
        updateVeloc = true;
        fuel = Math.min(fuel + 200, 500);
        rover = {
            x: 80,
            y: 80
        };
        gameOver = false;
    }
    return (
        <div>
            <GameTitle> Lunar Landing </GameTitle>
            <div id="lunar-main">
                <Sketch draw={draw} setup={setup} />
                <ResetButton resetFunc={reset} />
            </div>
        </div>
    )
}