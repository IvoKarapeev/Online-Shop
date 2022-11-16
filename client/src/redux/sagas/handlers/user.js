import { call,put } from 'redux-saga/effects';
import { setUserState } from '../../slice/productsSlice';
import { requestPostUser } from '../requests/user';


export function* postRegisterUser(action) {
    try {
        
        const userData = action.payload;
        const authData = yield call(requestPostUser,userData);
        yield put(setUserState(authData));

    } catch (error) {
        console.log(error);        
    }
};