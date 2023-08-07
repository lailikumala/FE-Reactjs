import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";
import trainingReducer from "./trainingSlice";
import classReducer from './classSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      employee: employeeReducer,
      training: trainingReducer,
      classTraining: classReducer
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;