import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import React, { useState } from 'react';

function App() {
    const [storeData, setStoreData] = useState(null);
    return (
        <div className='App'>
            <Header />
            <main>
                <Routes>
                    <Route
                        path='/'
                        element={<Navigate replace to='/homePage'></Navigate>}
                    />
                    <Route path='/homePage' element={<Homepage />} />
                    <Route
                        path='/products'
                        element={<Products setData={storeData} />}
                    />
                    <Route
                        path='/products/:productId'
                        element={<ProductDetail data={storeData} />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
