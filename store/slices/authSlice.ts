import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  email: string | null;
}

const initialState: AuthState = {
   isAuthenticated: typeof window !== "undefined" ? !!localStorage.getItem("isAuthenticated") : false,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.email = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("email", action.payload);
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.email = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("email");
      }
    },
    loadUser: (state) => {
      if (typeof window !== "undefined") {
        const auth = localStorage.getItem("isAuthenticated");
        const email = localStorage.getItem("email");
        state.isAuthenticated = auth === "true";
        state.email = email || null;
      }
    },
  },
});

export const { login, logout, loadUser } = authSlice.actions;
export default authSlice.reducer;
