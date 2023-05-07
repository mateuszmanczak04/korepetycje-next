import { createSlice } from '@reduxjs/toolkit';
import { signOut } from 'next-auth/react';

type InitialState = {
  cookiesAccepted: string;
};

const initialState = {
  cookiesAccepted: '',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    acceptCookies: (state) => {
      state.cookiesAccepted = 'true';
    },
    declineCookies: (state) => {
      state.cookiesAccepted = 'false';
      signOut({ redirect: false });
    },
  },
});

export default settingsSlice.reducer;
export const { acceptCookies, declineCookies } = settingsSlice.actions;
export const getCookiesAccepted = (state: any) =>
  state.settings.cookiesAccepted;
