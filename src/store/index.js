// src/store.js
import { configureStore } from '@reduxjs/toolkit';

const createStore = (preloadedState) => {
    return configureStore({
        reducer: {
            // [fileExplorerApi.reducerPath]: fileExplorerApi.reducer,
            // [QuestionBankApi.reducerPath]: QuestionBankApi.reducer,
            // [TryWithAiApi.reducerPath]: TryWithAiApi.reducer,
        },
        preloadedState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                // fileExplorerApi.middleware,
                // QuestionBankApi.middleware,
                // TryWithAiApi.middleware
            ),
    });
};

export default createStore;
