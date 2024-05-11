import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice/userSlice";
import productReducer from "./slices/ProductSlice/productSlice";
import cartReducer from "./slices/CartSlice/cartSlice";
import billReducer from "./slices/BillSlice/billSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
    bill: billReducer,
  },
});
