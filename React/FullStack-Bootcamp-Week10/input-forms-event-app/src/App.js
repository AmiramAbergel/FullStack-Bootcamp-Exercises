import React from 'react';

import './App.css';
import ParentManager from './components/ChildParent/ParentManager';
const colors = ['blue', 'red', 'yellow'];

function App() {
    return (
        <div className='App'>
            <ParentManager colors={colors} />
        </div>
    );
}

export default App;
