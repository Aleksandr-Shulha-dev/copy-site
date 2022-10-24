import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  tel: '+380',
};

const { reducer, actions } = createSlice({
  name: 'user-data',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { field, value } = action.payload
      return {...state, [field]: value};
    }
  },
  extraReducers: {},
});

export const {
  setUserData
} = actions;

export { reducer };