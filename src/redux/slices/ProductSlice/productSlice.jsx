import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductDetails = createAsyncThunk(
  "fetchProductDetails",
  async () => {
    const response = await fetch("http://127.0.0.1:8000/getproducts", {
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

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProductDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductDetails.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default productSlice.reducer;
