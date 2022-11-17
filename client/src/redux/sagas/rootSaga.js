import { takeLatest } from "redux-saga/effects";
import { getProductsHandler } from "./handlers/products";
import { getProducts, loginUser, registerUser } from "../slice/productsSlice";
import { postRegisterUser ,postLoginUser} from "./handlers/user";

export function* watcherSaga() {

    yield takeLatest(getProducts.type,getProductsHandler);
    yield takeLatest(registerUser.type,postRegisterUser);
    yield takeLatest(loginUser.type,postLoginUser);

};