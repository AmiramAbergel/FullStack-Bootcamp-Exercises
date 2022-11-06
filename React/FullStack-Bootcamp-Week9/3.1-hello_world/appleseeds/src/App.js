import JsxPlot from "./components/JsxPlot";
import Boxes from "./components/Box";
import Quiz from "./components/Quiz";

import "./App.css";

function App() {
    return (
        <header>
            <div className="App">
                <JsxPlot />
                <Boxes />
                <Quiz />
            </div>
        </header>
    );
}

export default App;
