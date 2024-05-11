import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the async thunk for posting billing details
export const postBillingDetails = createAsyncThunk(
  "bill/postBillingDetails",
  async (billingDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/billing-details",
        {
          email: billingDetails.email,
          address: billingDetails.address,
          Zip_Code: billingDetails.zipCode,
          City: billingDetails.city,
          Country: billingDetails.country,
        }
      );
      return response.data; // This will be the 'fulfilled' action payload
    } catch (error) {
      return rejectWithValue(error.response.data); // This will be the 'rejected' action payload
    }
  }
);

export const billSlice = createSlice({
  name: "bill",
  initialState: {
    email: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    status: "idle", // Add a status field to track the request state
    error: null, // Add an error field to store the error message if any
  },
  extraReducers: (builder) => {
    builder.addCase(postBillingDetails.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(postBillingDetails.fulfilled, (state, action) => {
      state.status = "succeeded";
      // Update state with the response data if needed
      // e.g., state.billingDetails = action.payload;
      alert("Details submitted successfully");
    });
    builder.addCase(postBillingDetails.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
      console.error("Error:", state.error);
    });
  },
});

export default billSlice.reducer;
