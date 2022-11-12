import './App.css';
import DataMassaging from './components/7.1_react_data_massaging/Users/DataMassaging';
import data from './data';

function App() {
    return (
        <div className='App'>
            <DataMassaging data={data}></DataMassaging>
        </div>
    );
}

export default App;
