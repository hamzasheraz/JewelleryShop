import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (formData, { rejectWithValue }) => {
    const jwt_token = jwtDecode(
      JSON.parse(localStorage.getItem("authtokens")).access
    );
    const formDataToSend = new FormData();
    formDataToSend.append("Phone_number", formData.Phone_number);
    formDataToSend.append("birth_date", formData.birth_date);
    formDataToSend.append("image", formData.newImage);
    formDataToSend.append("user_id", jwt_token.user_id);

    try {
      const response = await fetch("http://127.0.0.1:8000/updateuserprofile", {
        method: "PUT",
        body: formDataToSend,
      });
      if (!response.ok) {
        throw new Error(`Failed to update Userprofile: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserDetails = createAsyncThunk(
  "user/updateUserDetails",
  async (formData, { getState, rejectWithValue }) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/updateuser", {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer " +
            String(JSON.parse(localStorage.getItem("authtokens")).access),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          first_name: formData.firstname,
          last_name: formData.lastname,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update profile");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      Object.keys(userData).forEach((key) =>
        formData.append(key, userData[key])
      );

      const response = await axios.post(
        "http://127.0.0.1:8000/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserDetails = createAsyncThunk(
  "fetchUserDetails",
  async () => {
    const response = await fetch("http://127.0.0.1:8000/getuser", {
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

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      })
      .addCase(updateUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(updateUserDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export default userSlice.reducer;
