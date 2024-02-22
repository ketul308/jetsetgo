import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { flightSlice } from "../slices/flightSlice";

const store = configureStore({
    reducer: {
        flight: flightSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export { store }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
