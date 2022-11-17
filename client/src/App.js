import './App.css';

import HomePage from './components/Home/HomePage';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

import { Routes,Route } from 'react-router-dom';
import useLocalStorige from './hooks/useLocalStorige';
import { clearUserState } from './redux/slice/productsSlice';
import { useDispatch } from 'react-redux';

function App() {

    const [authData,setAuthData] = useLocalStorige('auth',{});
    const dispatch = useDispatch();

    const setUser = (data) => {
        setAuthData(data);
    };

    console.log(authData);
    
    const logoutHandler = () => {
        dispatch(clearUserState());
        setAuthData({});
    }

    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/register' element={<Register setUser={setUser}/>}/>
                <Route path='/login' element={<Login setUser={setUser}/>}/>
                <Route path='/logout' element={<Logout logoutHandler={logoutHandler}/>}/>
            </Routes>
        </div>
    );
}

export default App;
