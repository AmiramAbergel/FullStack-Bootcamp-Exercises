import { useState } from 'react';

import Nav from './nav/Nav';
import { carMarket } from '../carsAgObj';
import LargeHeading from './LargeHeading/LargeHeading';

import './App.css';
import { getFirstToUpper } from '../utils/carObj.utils';

function App() {
  const [currentDepartment, setCurrentDepartment] = useState(null);

  const someFunc = (param) => {
    setCurrentDepartment(param);
  };

  return (
    <div className='App'>
      <Nav departments={Object.keys(carMarket)} someFunc={someFunc} />
      <LargeHeading
        text={currentDepartment ? getFirstToUpper(currentDepartment) : 'Welcome to the car market'}
      />
      {console.log(carMarket[currentDepartment])}
    </div>
  );
}

export default App;
