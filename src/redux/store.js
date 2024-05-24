import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
  

import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contacts/slice";
import { filterReducer } from "./filters/slice";


const persistAuthConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
  }

const persistAuth = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistAuth,
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});

export const persistor = persistStore(store);
