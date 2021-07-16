import './style.css';
import betterHatImg from '../../images/betterhat.png';
import faceImg from '../../images/facepic.jpeg';
import mustacheImg from '../../images/mustache.png';
import Sketch from 'react-p5';
import GameTitle from '../../components/small/GameTitle';

export default function TashMe() {
    let face: any;
    let mustache: any;
    let hat: any;

    const setup = (p5: any, canvasParentRef: any) => {
        p5.createCanvas(500, 500).parent(canvasParentRef);
    }

    const preload = (p5: any) => {
        // 2. The code below loads your face picture into the program.
        //     Make sure the file name is correct for the face image you saved earlier
        face = p5.loadImage(faceImg);

        // 3. Set the size of the sketch. Make it big enough to show the face you chose.

        // 4. Resize the face so it is the same size as the sketch

        // 5. Find an image with a mustache and paste the link here.
        mustache = p5.loadImage(mustacheImg);

        hat = p5.loadImage(betterHatImg);
    }

    const draw = (p5: any) => {
        // 6. DRAW FACE.    Use the background() command to make the face the background of the sketch
        p5.background(face);
        //    Run the program to see if the face is drawn. Get this working before you go on.

        // 7. DRAW MUSTACHE. Use the image() command to draw the mustache.

        if (p5.mouseIsPressed) {
            p5.image(mustache, p5.mouseX - 250, p5.mouseY - 75);

        }
        if (p5.mouseButton === p5.RIGHT)
            p5.image(hat, 140, -60);
    }
    return (<div>
        <GameTitle> Tash Me </GameTitle>
        <div id="tash-main">
            <Sketch draw={draw} setup={setup} preload={preload} />
        </div>
    </div>)

}