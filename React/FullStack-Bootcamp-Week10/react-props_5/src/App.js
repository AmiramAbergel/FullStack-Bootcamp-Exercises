import Buttons from "./components/Buttons";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Buttons myKey={"Important"} weight={"bold"} />
            <Buttons myKey={"Not Important"} />
        </div>
    );
}

export default App;
