import "./style.css";
import nycat from "../../images/nycat.png"
export default function First() {
    return (
        <div id="first-main">
            <h1> LEAGUE Html </h1>
            <p className="hello"> Hello HTML </p>
            <div>
                <button onClick={() => alert('hah it was a scam')} id="cakeButton">
                    free cake 🎂
                </button>
            </div>
            <input type="text" />
            <ul>
                <li> <a href="https://youtu.be/QtBDL8EiNZo">
                    html guide
                </a>
                </li>
                <li>
                    vscode
                </li>
                <li>
                    p5.js
                </li>
            </ul>
            <div>
                <img src={nycat} width="300" height="300" />
            </div>
            <div>
                <iframe width="428" height="240" src="https://www.youtube.com/embed/SkgTxQm9DWM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}