import { takeLatest } from "redux-saga/effects";
import { getProductsHandler } from "./handlers/products";
import { getProducts, registerUser } from "../slice/productsSlice";
import { postRegisterUser } from "./handlers/user";

export function* watcherSaga() {

    yield takeLatest(getProducts.type,getProductsHandler);
    yield takeLatest(registerUser.type,postRegisterUser);

};