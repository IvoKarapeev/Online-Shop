import './App.css';

import HomePage from './components/Home/HomePage';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

import { Routes,Route } from 'react-router-dom';
import useLocalStorige from './hooks/useLocalStorige';


function App() {

    const [authData,setAuthData] = useLocalStorige('auth',{});

    const setUser = (data) => {
        setAuthData(JSON.stringify(data));
    };

    console.log(authData);

    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/register' element={<Register setUser={setUser}/>}/>
                <Route path='/login' element={<Login setUser={setUser}/>}/>
            </Routes>
        </div>
    );
}

export default App;
