import './App.css';
import Grandfather from './components/Grandfather';
import DisplayContextProvider from './components/display-context';
import TopMenu from './components/19.2/TopMenu';
import { Routes, Route, Navigate } from 'react-router-dom';
import PageOne from './components/19.2/PageOne';
import PageTwo from './components/19.2/PageTwo';
import ColorContextProvider from './components/19.2/color-context';
function App() {
    return (
        <div className='App'>
            {/* <DisplayContextProvider>
                <Grandfather></Grandfather>
            </DisplayContextProvider> */}
            <ColorContextProvider>
                <TopMenu />
                <main>
                    <Routes>
                        <Route
                            path='/'
                            element={<Navigate replace to='/1'></Navigate>}
                        />
                        <Route path='/1' element={<PageOne />} />
                        <Route path='/2' element={<PageTwo />} />
                    </Routes>
                </main>
            </ColorContextProvider>
        </div>
    );
}

export default App;
