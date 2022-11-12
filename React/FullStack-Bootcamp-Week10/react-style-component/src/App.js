import './App.css';
import Box1 from './components/BoxStyling/Box1';
import Box2 from './components/BoxStyling/Box2';
import Box3 from './components/BoxStyling/Box3';
import Box4 from './components/BoxStyling/Box4';
import PizzaOrder from './components/NinjaTurtles/PizzaOrder';
import data from './data';
function App() {
    return (
        <div className='App'>
            {/* <Box1>
                <Box2>
                    <Box3>
                        <Box4></Box4>
                    </Box3>
                </Box2>
            </Box1> */}
            <PizzaOrder data={data} />
        </div>
    );
}

export default App;
