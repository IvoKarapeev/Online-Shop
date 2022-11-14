import {
    configureStore,
    combineReducers,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';
import productsReducer from './slice/productsSlice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    products:productsReducer
});

const store = configureStore({
    reducer,
    middleware:[...getDefaultMiddleware({thunk:false}), sagaMiddleware]
});

sagaMiddleware.run(watcherSaga);

export default store;