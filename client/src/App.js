import './App.css';

import HomePage from './components/Home/HomePage';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import CatalogClothes from './components/CatalogClothes/CatalogClothes';
import CreateProduct from './components/CreateProduct/CreateProduct';
import CatalogShoes from './components/CatalogShoes/CatalogShoes';
import CatalogAccessories from './components/CatalogAccessories/CatalogAccessories';
import DetailsItem from './components/DetailsItem/DetailsItem';

import useLocalStorige from './hooks/useLocalStorige';
import { Routes,Route } from 'react-router-dom';
import { clearUserState } from './redux/slice/productsSlice';
import { useDispatch } from 'react-redux';
import { AuthContext } from './contexts/AuthContext';
import EditItem from './components/EditItem/EditItem';

function App() {

    const [authData,setAuthData] = useLocalStorige('auth',{});
    const dispatch = useDispatch();

    const setUser = (data) => {
        setAuthData(data);
    };

    const logoutHandler = () => {
        dispatch(clearUserState());
        setAuthData({});
    };

    return (
        <AuthContext.Provider value={{user:authData,setUser,logoutHandler}}>
            <div className="App">
                <Header/>

                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/logout' element={<Logout/>}/>
                    <Route path='/catalog/clothes' element={<CatalogClothes/>}/>
                    <Route path='/catalog/shoes' element={<CatalogShoes/>}/>
                    <Route path='/catalog/accessories' element={<CatalogAccessories/>}/>
                    <Route path='/procuts/sell' element={<CreateProduct/>}/>
                    <Route path='/product/details/:itemId' element={<DetailsItem/>}/>
                    <Route path='/product/edit/:itemId' element={<EditItem/>}/>
                </Routes>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
