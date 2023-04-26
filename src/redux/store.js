import { configureStore } from "@reduxjs/toolkit";
import { reducer, initialState } from './reducer';

export default configureStore({
    reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
});