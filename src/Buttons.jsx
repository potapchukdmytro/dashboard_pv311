import "./Buttons.css";

export const SolidButton = ({ text  = "default", color = "green" }) => {
    return (
        <button className={`solid-btn ${color}`}>{text}</button>
    );
}

export function OutlineButton(props) {
    return (
        <button className="outline-btn">{props.text}</button>
    );
}

export const AnimatedButton = () => {
    return (
        <button className="animated-btn">B</button>
    );
}