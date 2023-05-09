import { createAsyncThunk, createSlice, isFulfilled } from '@reduxjs/toolkit';
import appAxios from '../lib/appAxios';

type InitialState = {
  reviews: Review[];
  loading: boolean;
  error: string;
  mayAdd: boolean;
};

const initialState: InitialState = {
  reviews: [],
  loading: false,
  error: '',
  mayAdd: false,
};

export const checkIfMayAddReview = createAsyncThunk(
  'reviews/check-if-may-add',
  async (_, thunkAPI: any) => {
    try {
      const res = await appAxios.get('/api/reviews/check-if-may-add');
      return res.data.mayAdd;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
      // return thunkAPI.rejectWithValue(false);
    }
  }
);

export const fetchAllRevealedReviews = createAsyncThunk(
  '/reviews/fetch-all-reviews',
  async (_, thunkAPI: any) => {
    try {
      const res = await appAxios.get('/api/reviews/get-all-revealed');
      return res.data.reviews;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
      // return thunkAPI.rejectWithValue('Nie udało się pobrać opinii.');
    }
  }
);

export const addReview = createAsyncThunk(
  'reviews/add-review',
  async ({ title, rating }: { title: string; rating: number }, thunkAPI) => {
    try {
      const res = await appAxios.post('/api/reviews/add', { title, rating });
      return res.data.review;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
      // thunkAPI.rejectWithValue('Nie udało się dodać opinii.');
    }
  }
);

export const deleteReview = createAsyncThunk(
  '/reviews/delete',
  async ({ _id }: { _id: string }, thunkAPI) => {
    try {
      await appAxios.delete(`/api/reviews/delete/${_id}`);
      return _id;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
      // thunkAPI.rejectWithValue('Nie udało się usunąć opinii.');
    }
  }
);

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkIfMayAddReview.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(checkIfMayAddReview.fulfilled, (state, action) => {
      state.mayAdd = action.payload;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(checkIfMayAddReview.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchAllRevealedReviews.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchAllRevealedReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(fetchAllRevealedReviews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(addReview.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(addReview.fulfilled, (state, action) => {
      state.reviews.push(action.payload);
      state.mayAdd = false;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(addReview.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(deleteReview.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(deleteReview.fulfilled, (state, action) => {
      state.reviews = state.reviews.filter(
        (review) => review._id !== action.payload
      );
      state.mayAdd = true;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(deleteReview.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default reviewSlice.reducer;
export const getReviews = (state: any) => state.reviews.reviews;
export const getReviewsLoading = (state: any) => state.reviews.loading;
export const getReviewsError = (state: any) => state.reviews.error;
export const getMayAddReview = (state: any) => state.reviews.mayAdd;
