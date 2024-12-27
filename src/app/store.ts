import {configureStore} from "@reduxjs/toolkit";
import {todolistApp} from "../todolistApp/todolistApp";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [todolistApp.reducerPath]: todolistApp.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(todolistApp.middleware),
})

setupListeners(store.dispatch)