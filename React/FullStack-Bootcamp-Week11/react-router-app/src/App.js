import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Header from './components/Header';
function App() {
    return (
        <div className='App'>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/products' element={<Products />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
