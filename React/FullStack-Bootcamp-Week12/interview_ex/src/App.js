import './App.css';
import List from './components/List';
import DataContextProvider from './components/data-context';

function App() {
    return (
        <div className='App'>
            <DataContextProvider>
                <List />
            </DataContextProvider>
        </div>
    );
}

export default App;
