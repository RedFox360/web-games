import Sketch from 'react-p5';
import GameTitle from '../../components/small/GameTitle';
import './style.css';
export default function ZombieEyes() {
    let face: any;

    const preload = (p5: any) => {
        // 1. On the line below, change the link to one you want to use, or just use Tom!
        face = p5.loadImage(
            "https://pbs.twimg.com/profile_images/787691804787343362/avONcVAS.jpg"
        );
    }

    const setup = (p5: any) => {
        // 2. Run your program.  Is the face stretched?
        // Fix the numbers below so the face looks good
        p5.createCanvas(600, 600);
        face.resize(p5.width, p5.height);

        p5.background(face);
    }

    const draw = (p5: any) => {
        // 4. Give the eyes a color by using fill(red, green, blue);
        // (use numbers in place of red, green, blue)
        // Example: fill(255, 10, 200);
        p5.fill(p5.mouseX, p5.mouseY, 3);
        p5.noStroke();
        // 3. Use circle(x, y, size) to put two BIG eyes on the face
        // Example: circle(100, 50, 80);
        // 193, 253
        // 337, 246
        p5.circle(193, 253, 60);
        p5.circle(337, 246, 60);

        // 5. Use mouseX and mouseY to change the color of the irises when the mouse moves
        // hint: mouseX is a int variable, so you can use it anywhere you're using a number
        // hint: you will be changing the fill command you wrote in step 4

        // 6. Draw black pupils on top of the eyes.
        if (!p5.mousePressed) {
            p5.fill(43, 39, 36);
            p5.circle(193, 253, 30);
            p5.circle(337, 246, 30);
        }
    }

    return (<div>
        <GameTitle> Zombie Eyes </GameTitle>
        <div id="zombie-main">
            <Sketch draw={draw} setup={setup} preload={preload} />
        </div>
    </div>)

}