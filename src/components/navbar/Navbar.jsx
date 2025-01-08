import { SolidButton } from "../../Buttons";
import "./style.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="#">Main page</a>
            <a href="#">About</a>
            <a href="#">Page 3</a>
            <a href="#">Page 4</a>
            <SolidButton text="Page 5" color="green" />
        </div>
    );
};

export default Navbar;