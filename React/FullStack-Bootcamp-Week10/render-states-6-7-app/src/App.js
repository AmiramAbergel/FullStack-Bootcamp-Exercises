import "./App.css";
import Counter from "./components/6.1_Increment/Counter";
import HideSeek from "./components/6.2_hide_and_seek/HideSeek";

function App() {
    return (
        <div className="App">
            <Counter counter={0} />
            <HideSeek title={"show/hide"} con={true}></HideSeek>
        </div>
    );
}

export default App;
