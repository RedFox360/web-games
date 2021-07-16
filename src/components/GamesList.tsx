import './GamesList.css'
import { Link } from 'react-router-dom';
import P5Link from './small/P5Link';
import flappyBirdImg from '../images/flappybird_only.png';
import fishImg from '../images/fish.png';
import crystalBallImg from '../images/crystal_ball.png';
export default function NavBar() {
    return (
        <div id="game-container">
            <div className="gameLink">
                <Link to="/games/lunar" className="linka"> Lunar Lander </Link>
                <p> Land your rover on the moon! Use the arrow keys to move. <P5Link /> </p>
            </div>
            <div className="gameLink">
                <Link to="/games/first" className="linka"> First Project </Link>
                <p> My first simple HTML project </p>
            </div>
            <div className="gameLink">
                <a href="https://i4i16.csb.app" className="linka"> Magic 8 Ball </a>
                <p> A magic 8 ball that can predict anything ... </p>
                <div className="imgs">
                    <img src={crystalBallImg} width="40" height="55" alt="crystall ball" />
                    <img src={crystalBallImg} width="40" height="55" alt="crystall ball" />
                    <img src={crystalBallImg} width="40" height="55" alt="crystall ball" />
                </div>
            </div>
            <div className="gameLink">
                <Link to="/games/second" className="linka"> Guess the Password </Link>
                <p> Guess the password with hints that come up as you try </p>
                <p id="password-ast"> ***** </p>
            </div>
            <div className="gameLink">
                <Link to="/games/flappy" className="linka"> Flappy Bird </Link>
                <p> A classic flappy bird game! <P5Link /> </p>
                <div className="imgs">
                    <img src={flappyBirdImg} width="40" height="30" alt="flappy bird" />
                    <img src={flappyBirdImg} width="40" height="30" alt="flappy bird" />
                    <img src={flappyBirdImg} width="40" height="30" alt="flappy bird" />
                </div>
            </div>
            <div className="gameLink">
                <Link to="/games/cookie" className="linka"> Cookie Clicker </Link>
                <p> Keep clicking the cookie-- you will win when you reach 1000 clicks! <P5Link /> </p>
            </div>
            <div className="gameLink">
                <Link to="/games/fish" className="linka"> Fish Feeder </Link>
                <p> Catch as much food as you can! <P5Link /> </p>
                <div className="imgs">
                    <img src={fishImg} width="65" height="32" alt="fish" />
                    <img src={fishImg} width="65" height="32" alt="fish" />
                </div>
            </div>
            <div className="gameLink">
                <Link to="/games/zrace" className="linka"> Z-Race </Link>
                <p> Race a lion and a dog against eachother! Z -{'>'} move lion, p -{'>'} move dog <P5Link /> </p>
            </div>
            <div className="gameLink">
                <Link to="/games/rocket" className="linka"> Rocket </Link>
                <p> Watch a rocket blast off into the sky! <P5Link /> </p>
            </div>
            <div className="gameLink">
                <Link to="/games/tash" className="linka"> Tash Me </Link>
                <p> Press the left button to drag a mustache on the face. Press the right button to add a hat! <P5Link /> </p>
            </div>
            <div className="gameLink">
                <Link to="/games/zombie" className="linka"> Zombie Eyes </Link>
                <p> Special eyes on Tom Holland ... <P5Link /> </p>
            </div>
            <div className="gameLink">
                <Link to="/games/ufo" className="linka"> UFO </Link>
                <p> Watch a UFO fly around space <P5Link /> </p>
            </div>
        </div >
    )
}