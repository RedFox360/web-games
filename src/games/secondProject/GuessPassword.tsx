import './style.css';
let timesIncorrect = -1;
let hints = ["It's a plural", "It has no symbols", "It's an animal", "It's a reptile", "It lives underwater", "I give up..."]
export default function GuessPassword() {
    return (
        <div id="turtle-main">
            <h1 className="header"> Guess the Passcode </h1>
            <a id="correct" href="https://www.youtube.com/watch?v=iik25wqIuFo"> </a>
            <div> <input type="text" id="passwordInput" /> </div>
            <div> <button onClick={() => {
                const x = document.getElementById("passwordInput");
                const text = document.getElementById("correct");
                const hintList = document.getElementById("hints");
                const guess = (x as any).value;

                if (guess === "turtles" || guess === "sea turtles") {
                    (text as any).innerHTML = "You got it correct!";
                } else {
                    timesIncorrect += 1;
                    (text as any).innerHTML = "Incorrect - Try again!";
                    if (timesIncorrect >= hints.length) return;
                    (hintList as any).innerHTML += `<li> ${hints[timesIncorrect]} </li>`;
                }
            }}> Submit </button> </div>
            <div id="hintsDiv"> <h2 className="header"> Hints </h2>
                <ul id="hints"> <li> It's all lowercase </li> </ul> </div>
        </div>)
}