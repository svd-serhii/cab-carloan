import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as API from '../../services/eventApi';

export const getEvents = createAsyncThunk(
  'events/getEvents',
  async (_, { rejectWithValue }) => {
    try {
      const result = await API.getEvents();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addEvent = createAsyncThunk(
  'events/addEvent',
  async (event, { rejectWithValue }) => {
    try {
      const data = await API.addEvent(event);
      toast.success('Event added');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteEvent = createAsyncThunk(
  'events/deleteEvent',
  async (id, { rejectWithValue }) => {
    try {
      await API.deleteEVent(id);
      toast.info('Event deleted');
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
