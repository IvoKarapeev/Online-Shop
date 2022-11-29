import { takeLatest } from "redux-saga/effects";
import { deleteProductHandler, editProductHanlder, getProductsHandler,postProductHandler, purchaseProductHandler } from "./handlers/products";
import { getProducts, loginUser, registerUser, postProduct, purchaseProduct, editProduct, deleteProduct } from "../slice/productsSlice";
import { postRegisterUser, postLoginUser} from "./handlers/user";

export function* watcherSaga() {

    yield takeLatest(getProducts.type,getProductsHandler);
    yield takeLatest(registerUser.type,postRegisterUser);
    yield takeLatest(loginUser.type,postLoginUser);
    yield takeLatest(postProduct.type,postProductHandler);
    yield takeLatest(purchaseProduct.type,purchaseProductHandler);
    yield takeLatest(editProduct.type,editProductHanlder);
    yield takeLatest(deleteProduct.type,deleteProductHandler);

};