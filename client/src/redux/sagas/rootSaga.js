import { takeLatest } from "redux-saga/effects";
import { getProductsHandler } from "./handlers/products";
import { getProducts } from "../slice/productsSlice";

export function* watcherSaga() {

    yield takeLatest(getProducts.type,getProductsHandler);

};