import Sketch from 'react-p5';
import GameTitle from '../../components/small/GameTitle';
import ResetButton from '../../components/small/ResetButton';
import cookieImg from '../../images/cookie.png';
import './style.css';
export default function CookieClicker() {
    let won = false;
    //1. create a variable for your cookie count
    let count = 0;
    let cookie: any;
    let time = 0;
    const preload = (p5: any) => {
        cookie = p5.loadImage(cookieImg);
    }
    const setup = (p5: any, canvasParentRef: any) => {
        p5.frameRate(20);
        const canvas = p5.createCanvas(500, 500).parent(canvasParentRef);
        canvas.mousePressed(() => {
            count++;
        });
    }
    const draw = (p5: any) => {
        time += 0.05;
        p5.background(220);
        p5.fill(0, 0, 0);
        p5.textSize(30);
        p5.text(`Time: ${time.toFixed(1)}s`, 50, 100);
        if (p5.millis() >= 30000) {
            alert(`Time's up! You clicked ${count} times in 30 seconds. - ${(count / 30).toFixed(2)} times per second.`);
            p5.noLoop();
        }
        if (!won) {
            p5.fill(139, 69, 19)
            if (p5.mouseIsPressed) {
                //2. use the image command to draw the cookie: image(cookieImage, 100,100, 360,360);
                p5.image(cookie, 75, 75, 360, 360);
            } else {
                //3. draw the cookie a little bigger when the mouse isn't pressed:
                p5.image(cookie, 75, 75, 380, 380);
            }
            p5.fill(0, 0, 0);
            // 4. use the textSize to change the text size
            p5.textSize(30);
            p5.text(`Cookie Clicker: ${count} times`, 50, 50);
            // 5. use the text command to display the word cookies and the cookie count.
        }
    }
    const reset = () => {
        window.location.reload();
    }

    return <div>
        <GameTitle> Cookie Clicker </GameTitle>
        <div id="cookie-main">
            <Sketch setup={setup} draw={draw} preload={preload} />
            <ResetButton resetFunc={reset} />
        </div>
    </div>
}