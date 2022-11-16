import './App.css';

import HomePage from './components/Home/HomePage';
import Header from './components/Header/Header';
import Register from './components/Register/Register';

import { Routes,Route } from 'react-router-dom';

function App() {

    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </div>
    );
}

export default App;
