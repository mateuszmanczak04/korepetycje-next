import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import appAxios from '../lib/appAxios';
import { getSession } from 'next-auth/react';
import axios from 'axios';

type InitialState = {
  user: {
    username: string;
    email: string;
    _id: string;
    imgUrl: string;
    isAdmin: boolean;
  };
  loading: boolean;
  error: string;
};

const initialState: InitialState = {
  user: {
    username: '',
    email: '',
    _id: '',
    imgUrl: '',
    isAdmin: false,
  },
  loading: false,
  error: '',
};

export const fetchUserData = createAsyncThunk(
  'user/fetch-user-data',
  async (_, thunkAPI: any) => {
    try {
      const session = await getSession();
      if (!session) {
        return {};
      }
      const res = await appAxios.get('/api/user/get-data');
      const { username, _id, email, imgUrl, isAdmin } = res.data.user;

      return {
        username,
        email,
        _id,
        imgUrl,
        isAdmin,
      };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const changeUsername = createAsyncThunk(
  'user/change-username',
  async ({ username }: { username: string }, thunkAPI: any) => {
    try {
      await appAxios.patch('/api/user/change-username', {
        username,
      });
      return username;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const changeProfilePicture = createAsyncThunk(
  'user/change-profile-picture',
  async ({ imgFile }: { imgFile: any }, thunkAPI) => {
    try {
      const response = await appAxios.post('/api/upload-image', {
        type: imgFile.type,
        name: imgFile.name,
      });

      const { url } = response.data;
      await axios.put(url, imgFile);
      const imgUrl = url.split('?')[0];

      await appAxios.put('/api/user/change-profile-picture', {
        imgUrl,
      });
      return imgUrl;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = '';
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(changeUsername.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(changeUsername.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.user.username = action.payload;
    });
    builder.addCase(changeUsername.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(changeProfilePicture.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(changeProfilePicture.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.user.imgUrl = action.payload;
    });
    builder.addCase(changeProfilePicture.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default userSlice.reducer;
export const getUserData = (state: any) => state.user.user;
export const getUserLoading = (state: any) => state.user.loading;
export const getUserError = (state: any) => state.user.error;
export const getIsAdmin = (state: any) => state.user.user.isAdmin;
