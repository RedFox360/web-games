import './style.css';
import Sketch from 'react-p5';
import ResetButton from '../../components/small/ResetButton';
import GameTitle from '../../components/small/GameTitle';

export default function ZRace() {
    let catImage: any;
    let dogImage: any;
    let spaceImage: any;
    let winner: any;
    let racer1X = 0;
    let racer1Y = 100;

    let racer2X = 0;
    let racer2Y = 300;

    const setup = (p5: any, canvasParentRef: any) => {
        p5.createCanvas(1000, 500).parent(canvasParentRef);
        p5.textSize(35);
        //  IMAGES
        //  This code loads all the sounds and images so they are ready to use in the program
        //  If you want to change the images and sounds, change the file names here.
        catImage = p5.loadImage(
            "https://raw.githubusercontent.com/League-central/java-modules/development/Level0-Module0/src/_99_extra/z_Race/lion.png"
        );
        dogImage = p5.loadImage(
            "https://raw.githubusercontent.com/League-central/java-modules/development/Level0-Module0/src/_99_extra/z_Race/dog.png"
        );
        spaceImage = p5.loadImage(
            "https://raw.githubusercontent.com/League-central/java-modules/development/Level0-Module0/src/_99_extra/z_Race/space.png"
        );
        spaceImage.resize(p5.width, p5.height);
    }

    const draw = (p5: any) => {
        // 1. DRAW BACKGROUND
        //    Use the background() command to draw where the race is taking place.
        //    You can use the image provided (spaceImage), or change it to something else.
        p5.background(spaceImage);
        // 2. DRAW the RACERS
        //    You can use the cat and dog images for the racers or change them to something else.
        //    Use the image() command to draw each of the two racers.

        //    RACER 1
        //    Put the first image (catImage) at location racer1X, racer1Y
        p5.image(catImage, racer1X, racer1Y);

        //    RACER 2
        //    Draw the second image (dogImage) at location racer2X, racer2Y
        p5.image(dogImage, racer2X, racer2Y);

        // 3. WINNER
        //    Find the checkForWinner() function. The messages are set for a cat and dog.
        //    If you have changed the racer images, change the method to match them
        checkForWinner(p5);
        // 4. TEST #1
        //    Run the program. Do you see the images?

        // 5. RACE
        //    The racers need to move when keys are pressed. The example below uses 'q' to move
        //    racer1 and 'p' to move racer2. If you want to use different keys, change this code
        if (p5.keyIsPressed) {
            if (p5.key === "z") {
                moveRacer1();
            }
            if (p5.key === "p") {
                moveRacer2();
            }
        }

        // 6. TEST #2
        //    Run the program. Do the images move when you press the keys?
        //    Does the name ofß the winner appear when one racer reaches the end?

        // 7. FAST ENOUGH?
        //    See if you can figure out what code to change so the racers move faster/slower
    }

    const moveRacer1 = () => {
        racer1X = racer1X + 5;
    }

    const moveRacer2 = () => {
        racer2X = racer2X + 5;
    }

    const checkForWinner = (p5: any) => {
        p5.fill(252, 169, 3);
        if (racer1X > p5.width - 60) {
            if (winner === "Dog") return;
            p5.text("LIONS ARE THE BEST", 400, 50);
            winner = "Lion";
        }
        if (racer2X > p5.width - 60) {
            if (winner === "Lion") return;
            p5.text("DOGS RULE", 500, 50);
            winner = "Dog";
        }
    }
    const reset = () => {
        winner = undefined;
        racer1X = 0;
        racer1Y = 100;

        racer2X = 0;
        racer2Y = 300;
    }
    return <div> <GameTitle> Z-Race </GameTitle> <div id="zmain"> <Sketch draw={draw} setup={setup} /> <ResetButton resetFunc={reset} /> </div></div>

}