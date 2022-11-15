import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getProducts } from './redux/slice/productsSlice';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    },[dispatch]);

    const products = useSelector((state) => state.products);

    return (
        <div className="App">

        </div>
    );
}

export default App;
