import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./services/contacts";
import filterReducers from "./contactsListReducers/filterReducers";
import authSlice from "./auth/authSlice";

export const store = configureStore({
    reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducers,
      auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware)
})
