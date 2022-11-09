import React from 'react';
import './App.css';
// import ParentManager from './components/ChildParent/ParentManager';
import CheckBoxManager from './components/CheckBox/CheckBoxManager';

const colors = ['blue', 'red', 'yellow'];

function App() {
    return (
        <div className='App'>
            {/* <ParentManager colors={colors} /> */}
            <CheckBoxManager />
        </div>
    );
}

export default App;
