import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  physicalCounter: 0,
  psychologicalCounter: 0,
  socialCounter: 0,
  spiritualCounter: 0,
  professionalCounter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    physicalIncrement(state) {
      state.physicalCounter++;
    },
    physicalIncrease(state, action) {
      state.physicalCounter = state.physicalCounter + action.payload;
    },
    psychologicalIncrement(state) {
      state.psychologicalCounter++;
    },
    psychologicalIncrease(state, action) {
      state.psychologicalCounter = state.psychologicalCounter + action.payload;
    },
    socialIncrement(state) {
      state.socialCounter++;
    },
    socialIncrease(state, action) {
      state.socialCounter = state.socialCounter + action.payload;
    },
    spiritualIncrement(state) {
      state.spiritualCounter++;
    },
    spiritualIncrease(state, action) {
      state.spiritualCounter = state.spiritualCounter + action.payload;
    },
    professionalIncrement(state) {
      state.professionalCounter++;
    },
    professionalIncrease(state, action) {
      state.professionalCounter = state.professionalCounter + action.payload;
    },
  },
});

const initialShowState = {
    physical: true,
    psychological: false,
    social: false,
    spiritual: false,
    professional: false,
};

const showSlice = createSlice({
  name: "Show",
  initialState: initialShowState,
  reducers: {
    physicalShow(state) {
      state.physical = true;
    },
    physicalHide(state) {
      state.physical = false;
    },
    psychologicalShow(state) {
      state.psychological = true;
    },
    psychologicalHide(state) {
      state.psychological = false;
    },
    socialShow(state) {
      state.social = true;
    },
    socialHide(state) {
      state.social = false;
    },
    spiritualShow(state) {
      state.spiritual = true;
    },
    spiritualHide(state) {
      state.spiritual = false;
    },
    professionalShow(state) {
      state.professional = true;
    },
    professionalHide(state) {
      state.professional = false;
    }
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, show: showSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const showActions = showSlice.actions;

export default store;
