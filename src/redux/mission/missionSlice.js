import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  status: 'idle',
  joined: false,
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(fetchMissions.fulfilled, (state, action) => ({ ...state, status: 'succeeded', missions: action.payload }))
      .addCase(fetchMissions.rejected, (state) => ({ ...state, status: 'failed' }));
  },
});

export default missionSlice.reducer;
