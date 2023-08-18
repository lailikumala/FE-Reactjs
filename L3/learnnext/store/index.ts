import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";
import trainingReducer from "./trainingSlice";
import classReducer from './classSlice';
import rekeningReducer from './rekeningSlice';
import authReducer from './authSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      auth: authReducer,
      employee: employeeReducer,
      training: trainingReducer,
      classTraining: classReducer,
      rekening: rekeningReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;