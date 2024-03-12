import {createRoot} from "react-dom/client"
import Board from "./Board";
import GenerateMatrix from "./GenerateMatrix";
// import Cell from "./Cell";

const App = () => {
    let arr =GenerateMatrix(6,6);

    return (
        <div id="main">
            <h1>MineSweeper</h1>
            <Board arr={arr}/>
        </div>
    )
}

const container=document.getElementById("root");
const root=createRoot(container);
root.render(<App/>);