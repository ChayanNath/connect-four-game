import {
  combineReducers,
  configureStore,
  Middleware,
  PreloadedState,
} from "@reduxjs/toolkit";
import { modalReducer } from "./modal-slice";

const rootReducer = combineReducers({
  modal: modalReducer,
});

//MIDDLEWARE
const localStorageMiddleware: Middleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("connectFourGameSettigns", JSON.stringify(getState()));
    return result;
  };
};

// Rehydration function

const reHydrateStore = () => {
  if (localStorage.getItem("connectFourGameSettigns") !== null) {
    return JSON.parse(localStorage.getItem("connectFourGameSettigns")!); // re-hydrate the store
  }
};

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
