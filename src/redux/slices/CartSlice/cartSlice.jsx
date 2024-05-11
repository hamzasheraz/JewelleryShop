import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode"; // Ensure jwt-decode is imported if used

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ product, numberofitems }, { getState, rejectWithValue }) => {
    const authToken = JSON.parse(localStorage.getItem("authtokens"));
    const jwt_token = jwtDecode(authToken.access);
    try {
      const response = await fetch("http://127.0.0.1:8000/addtocart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken.access,
        },
        body: JSON.stringify({
          user: jwt_token.user_id,
          items: product.id,
          number_of_items: numberofitems,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to add to cart");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletAllCartItem = createAsyncThunk(
  "cart/deleteAllCartItem",
  async () => {
    const response = await fetch("http://127.0.0.1:8000/deleteallcart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          String(JSON.parse(localStorage.getItem("authtokens")).access),
      },
    });
    return response.json();
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (id1, { getState, rejectWithValue }) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/deletecartitem", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " +
            String(JSON.parse(localStorage.getItem("authtokens")).access),
        },
        body: JSON.stringify({ id: id1 }),
      });
      return response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCartItems = createAsyncThunk("fetchCartItems", async () => {
  const response = await fetch("http://127.0.0.1:8000/getcartitems", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " +
        String(JSON.parse(localStorage.getItem("authtokens")).access),
    },
  });
  return response.json();
});

export const fetchCartNoItems = createAsyncThunk(
  "fetchCartNoItems",
  async () => {
    const response = await fetch("http://127.0.0.1:8000/getcartitemstwo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          String(JSON.parse(localStorage.getItem("authtokens")).access),
      },
    });
    return response.json();
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    items: null,
    items2: null,
    isError: false,
    addCartStatus: "idle",
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(fetchCartNoItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items2 = action.payload;
      })
      .addCase(fetchCartNoItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartNoItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.meta.arg);
      })
      .addCase(deleteCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(deletAllCartItem.fulfilled, (state, action) => {
        state.items = [];
      })
      .addCase(deletAllCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletAllCartItem.rejected, (state, action) => {
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.addCartStatus = "succeeded";
        // Update the cart items with the new item
        state.items = [...state.items, action.payload];
      })
      .addCase(addToCart.pending, (state) => {
        state.addCartStatus = "loading";
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.addCartStatus = "failed";
        state.errorMessage = action.payload;
      });
  },
});

export default cartSlice.reducer;
