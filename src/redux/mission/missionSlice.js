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
  reducers: {
    joinMission: (state, action) => {
      const missionID = action.payload;
      const updatedMissions = state.missions.map((mission) => {
        if (mission.mission_id === missionID) {
          return { ...mission, joined: true };
        }
        return { ...mission };
      });
      return { ...state, missions: updatedMissions };
    },
    leaveMission: (state, action) => {
      const missionID = action.payload;
      const updatedMissions = state.missions.map((mission) => {
        if (mission.mission_id === missionID) {
          return { ...mission, joined: false };
        }
        return { ...mission };
      });
      return { ...state, missions: updatedMissions };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(fetchMissions.fulfilled, (state, action) => ({ ...state, status: 'succeeded', missions: action.payload }))
      .addCase(fetchMissions.rejected, (state) => ({ ...state, status: 'failed' }));
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
