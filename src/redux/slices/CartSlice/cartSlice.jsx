import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode"; // Ensure jwt-decode is imported if used
import { current } from "@reduxjs/toolkit";

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
      const productSlice = getState().product;
      const data = await response.json();
      return {
        data,
        product: productSlice.data.find((p) => p.id === product.id),
      };
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
    if (!response.ok) {
      throw new Error("Failed to delete");
    }
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
      if (!response.ok) {
        throw new Error("Failed to delete");
      }
      if (response.status === 204) {
        // Return a specific payload or simply return to indicate success
        return { id: id1, deleted: true };
      }
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
        const index = state.items2.findIndex(
          (items) => items.id === action.meta.arg
        );
        state.items = state.items.filter((item,id) => id !== index);
        state.items2 = state.items2.filter(
          (item) => item.id !== action.meta.arg
        );
        state.isLoading = false;
      })
      .addCase(deleteCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.isError = true;
        console.log("action3");
        state.errorMessage = action.payload;
      })
      .addCase(deletAllCartItem.fulfilled, (state, action) => {
        state.items = [];
        state.items2 = [];
        state.isLoading = false;
      })
      .addCase(deletAllCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletAllCartItem.rejected, (state, action) => {
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        const index = state.items2.findIndex(
          (item) => item.items === action.meta.arg.product.id
        );
        if (index !== -1) {
          state.items2[index].number_of_items += action.meta.arg.numberofitems;
        } else {
          state.items = [...state.items, action.meta.arg.product];
          state.items2 = [...state.items2, action.payload.data];
        }
        state.isLoading = false;
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default cartSlice.reducer;
