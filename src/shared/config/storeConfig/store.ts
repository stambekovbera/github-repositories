import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { IStateSchema } from './StateSchema';
import { repositoriesReducer } from 'entities/Repositories';
import { toasterReducer } from 'features/Toaster';

export const createReduxStore = (initialState?: IStateSchema) => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        repositories: repositoriesReducer,
        toaster: toasterReducer
    };


    return configureStore<IStateSchema>( {
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    } );
};
