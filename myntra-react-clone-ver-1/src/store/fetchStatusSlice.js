import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, //false: 'PENDING' and true : 'DONE'
    currentFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      return (state.fetchDone = true);
    },
    markFetchingStarted: (state) => {
      return (state.currentFetching = true);
    },
    markFetchingFinished: (state) => {
      return (state.currentFetching = false);
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
