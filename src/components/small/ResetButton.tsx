import './ResetButton.css';

export default function ResetButton(props: { resetFunc: () => void }) {
    return (
        <button id="reset-button" onClick={props.resetFunc}> Reset </button>
    )
}