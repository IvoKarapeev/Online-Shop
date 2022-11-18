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
import { AuthContext } from './contexts/AuthContext';

function App() {

    const [authData,setAuthData] = useLocalStorige('auth',{});
    const dispatch = useDispatch();

    const setUser = (data) => {
        setAuthData(data);
    };

    const logoutHandler = () => {
        dispatch(clearUserState());
        setAuthData({});
    }

    return (
        <AuthContext.Provider value={{user:authData,setUser,logoutHandler}}>
            <div className="App">
                <Header/>

                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/logout' element={<Logout/>}/>
                </Routes>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
