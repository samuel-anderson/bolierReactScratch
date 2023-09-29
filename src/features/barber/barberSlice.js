import { createSlice } from "@reduxjs/toolkit";

const BARBER_INITIAL_STATE = { barbers: [], loading: false, error: null };

const barberSlice = createSlice({
  name: "barber",
  initialState: BARBER_INITIAL_STATE,
  reducers: {
    fetchBarbersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBarbersSuccess: (state, action) => {
      state.loading = false;
      state.barbers = action.payload;
    },
    fetchBarbersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchBarbersStart, fetchBarbersSuccess, fetchBarbersFailure } =
  barberSlice.actions;
export default barberSlice.reducer;
