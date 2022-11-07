import "./App.css";
import Counter from "./components/6.1_Increment/Counter";
import HideSeek from "./components/6.2_hide_and_seek/HideSeek";
import IncrementDecrement from "./components/6.3_increment_and_decrement/IncrementDecrement";

function App() {
    return (
        <div className="App">
            <Counter counter={0} />
            <HideSeek title={"show/hide"} con={true}></HideSeek>
            <IncrementDecrement counter={0} />
        </div>
    );
}

export default App;
