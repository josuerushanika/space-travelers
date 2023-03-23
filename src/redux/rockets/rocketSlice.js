import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rocketListData: [],
  status: 'idle',
  error: null,
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    return result;
  } catch (error) {
    return error.message;
  }
});

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, payload) => ({
      ...state,
      rocketListData: state.rocketListData.map((rocketData) => {
        if (rocketData.id === payload.payload) {
          if (rocketData.reserved === true) {
            return { ...rocketData, reserved: false };
          }
          return { ...rocketData, reserved: true };
        }
        return rocketData;
      }),
    }),

    cancelRocket: (state, payload) => {
      const rocketData = state.rockets.map((rocket) => {
        if (rocketData.id === payload.payload) return rocket;
        return { ...rocketData, reserved: false };
      });
      return { ...state, rocketData };
    },

  },

  extraReducers(builder) {
    builder.addCase(fetchRockets.pending, (state) => ({
      ...state,
      status: 'loading',
    }))

      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        rocketListData: action.payload.map((rocketData) => ({
          id: rocketData.rocket_id,
          name: rocketData.rocket_name,
          description: rocketData.description,
          flickr_image: rocketData.flickr_images,
        })),
        status: 'loading',
      }))
      .addCase(fetchRockets.rejected, (state, action) => ({
        ...state,
        state: 'failed',
        error: [...state.error, action.error.message],
      }));
  },
});

export const { reserveRocket, cancelRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
