import './GameTitle.css';
export default function GameTitle(props: { children: string }) {
    return (<h1 id="game-title"> {props.children} </h1>)
}