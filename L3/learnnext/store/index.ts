import { configureStore, combineReducers } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";
import trainingReducer from "./trainingSlice";
import classReducer from './classSlice';
import rekeningReducer from './rekeningSlice';
import authReducer from './authSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  employee: employeeReducer,
  training: trainingReducer,
  classTraining: classReducer,
  rekening: rekeningReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default () => {
  let persistor = persistStore(store);
  return { store, persistor };
};