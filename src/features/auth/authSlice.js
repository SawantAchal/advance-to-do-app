import { createSlice } from '@reduxjs/toolkit';

const loadAuthFromLocalStorage = () => {
  const auth = localStorage.getItem('auth');
  return auth ? JSON.parse(auth) : { isAuthenticated: false };
};

const saveAuthToLocalStorage = (auth) => {
  localStorage.setItem('auth', JSON.stringify(auth));
};

const authSlice = createSlice({
  name: 'auth',
  initialState: loadAuthFromLocalStorage(),
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      saveAuthToLocalStorage(state);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      saveAuthToLocalStorage(state);
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
