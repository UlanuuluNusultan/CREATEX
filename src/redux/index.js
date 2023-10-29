import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./slice/ProductSlice";
import singleProductSlice from "./slice/SingleProductSlice";
import userSlice from "./slice/userSlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        singleProduct: singleProductSlice,
        user: userSlice,
    },
})

export default store;