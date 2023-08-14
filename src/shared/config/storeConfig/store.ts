import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { IStateSchema } from './StateSchema';
import { repositoriesReducer } from 'entities/Repositories';
import { toasterReducer } from 'features/Toaster';
import { dialogEditRepositoryReducer } from 'features/DialogEditRepository';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE, } from 'redux-persist';

export const createReduxStore = (initialState?: IStateSchema) => {
    const rootReducers = combineReducers<IStateSchema>( {
        repositories: repositoriesReducer,
        toaster: toasterReducer,
        dialogEditRepository: dialogEditRepositoryReducer,
    } );

    const persistConfig = {
        key: 'root',
        storage,
        whitelist: [ 'repositories' ],
    };

    const persistedReducers = persistReducer( persistConfig, rootReducers );

    const store = configureStore( {
        reducer: persistedReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware( {
                serializableCheck: {
                    ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
                },
            } ),
    } );

    const persistor = persistStore( store );

    return {
        store,
        persistor
    };
};
