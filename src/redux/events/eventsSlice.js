import { createSlice } from '@reduxjs/toolkit';
import { getEvents, addEvent, deleteEvent } from './eventsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const eventSlice = createSlice({
  name: 'events',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getEvents.pending, (state, { payload }) => state)
      .addCase(getEvents.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(getEvents.rejected, (state, action) => state);

    builder
      .addCase(addEvent.pending, (state, { payload }) => state)
      .addCase(addEvent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addEvent.rejected, (state, action) => {
        return state;
      });

    builder
      .addCase(deleteEvent.pending, (state, { payload }) => state)
      .addCase(deleteEvent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === payload?.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        return state;
      });
  },
});
