import { takeLatest } from "redux-saga/effects";
import { getProductsHandler,postProductHandler, purchaseProductHandler } from "./handlers/products";
import { getProducts, loginUser, registerUser, postProduct, purchaseProduct } from "../slice/productsSlice";
import { postRegisterUser, postLoginUser} from "./handlers/user";

export function* watcherSaga() {

    yield takeLatest(getProducts.type,getProductsHandler);
    yield takeLatest(registerUser.type,postRegisterUser);
    yield takeLatest(loginUser.type,postLoginUser);
    yield takeLatest(postProduct.type,postProductHandler);
    yield takeLatest(purchaseProduct.type,purchaseProductHandler);

};