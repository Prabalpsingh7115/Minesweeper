import {createRoot} from 'react-dom/client';
import PlayingWindow from './PlayingWindow';
import GenerateMatrix from './GenerateMatrix';

const App = () => {

    GenerateMatrix();


    return (
        <div id="main">
            <div className='header'>
                <h2>Minesweeper</h2>
            </div>
            <PlayingWindow
            cells={matrix}/>
            <div className='buttons'>
                <button id="start" >Start</button>
                <button id="newgame" onClick={()=>{
                    setMatrix(GenerateMatrix());
                }}>New game</button>
            </div>
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>)
