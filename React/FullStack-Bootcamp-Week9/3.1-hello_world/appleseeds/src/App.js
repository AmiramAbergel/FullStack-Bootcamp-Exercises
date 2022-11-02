import JsxPlot from "./components/JsxPlot";
import Boxes from "./components/Box";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <JsxPlot />
            <Boxes />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Click Me
                </a>
            </header>
        </div>
    );
}

export default App;
