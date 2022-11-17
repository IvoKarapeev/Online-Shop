import { call,put } from 'redux-saga/effects';
import { setUserState,setErrorAuth } from '../../slice/productsSlice';
import { requestPostUser,requestLoginUser } from '../requests/user';


export function* postRegisterUser(action) {
    try {
        
        const userData = action.payload;
        const authData = yield call(requestPostUser,userData);
        if (authData.error) {
            yield put(setErrorAuth(authData.error));
        }else{
            yield put(setUserState(authData));
        }

    } catch (error) {
        console.log(error);        
    }
};

export function* postLoginUser(action) {
    try {
        
        const userData = action.payload;
        const authData = yield call(requestLoginUser,userData);
        if (authData.error) {
            yield put(setErrorAuth(authData.error));
        }else{
            yield put(setUserState(authData));
        }

    } catch (error) {
        console.log(error);        
    }
};