import { SolidButton, OutlineButton, AnimatedButton } from "./../../Buttons";
// import all
import * as Buttons from "./../../Buttons";
import ClassComponent from "../../components_lesson/classComponent/ClassComponent";
import "./MainPage.css";

const MainPage = () => {
    let titleText = "Dashboard project";

    const btnClickHandler = () => {
        const text = document.getElementById("titleText").value;
        titleText = text;
        console.log(titleText);
    }

    return (
        <div className="container">
            <SolidButton text="Solid green button" />
            <div className="title">
                <h1>{titleText}</h1>
            </div>
            <div className="content">
                <p>Content text</p>
            </div>
            <ClassComponent text="Class component props text" />
            <div>
                <SolidButton text="Solid red button" color="red" />
            </div>
            <div>
                <OutlineButton text="Go to new page" />
            </div>
            <div>
                <AnimatedButton />
            </div>

            <div>
                <input id="titleText" />
                <button onClick={btnClickHandler}>Change title</button>
            </div>
        </div>
    );
};

export default MainPage;
