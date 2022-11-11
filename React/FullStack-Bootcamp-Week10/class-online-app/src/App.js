import './App.css';
import NavBarManager from './components/Nav/NavBarManager';
import { carMarket } from './carsAgObj';
import carObjUtils from './utils/getFirstToUpper';
import Nav from './components/Nav/Nav';

function App() {
    return (
        <div className='App'>
            <NavBarManager data={carMarket}></NavBarManager>
        </div>
    );
}

export default App;
