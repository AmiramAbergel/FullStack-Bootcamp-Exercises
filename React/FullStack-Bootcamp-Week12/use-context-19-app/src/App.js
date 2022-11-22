import './App.css';
import Grandfather from './components/Grandfather';
import DisplayContextProvider from './components/display-context';
function App() {
    return (
        <div className='App'>
            <DisplayContextProvider>
                <Grandfather></Grandfather>
            </DisplayContextProvider>
        </div>
    );
}

export default App;
