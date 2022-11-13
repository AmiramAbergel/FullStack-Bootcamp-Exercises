import './App.css';
import React, { useEffect, useState } from 'react';
import FavoriteColor from './components/FavoriteColor/FavoriteColor';
import BoxAnimation from './components/BoxAnimation/BoxAnimation';
import ChangingBox from './components/ChangingBox/ChangingBox';
import Spinner from './components/Spinner/Spinner';
import Focus from './components/Focus/Focus';

function App() {
    // const [spinner, setSpinner] = useState(<Spinner />);

    // useEffect(() => {
    //     const timer = setTimeout(() => setSpinner(null), 5000);
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <div className='App'>
            {/* <FavoriteColor /> */}
            {/* <BoxAnimation /> */}
            {/* <ChangingBox /> */}
            {/* {spinner} */}
            <Focus />
        </div>
    );
}

export default App;
