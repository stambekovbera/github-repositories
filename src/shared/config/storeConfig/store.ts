import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { IStateSchema } from './StateSchema';
import { repositoriesReducer } from 'entities/Repositories';

export const createReduxStore = (initialState?: IStateSchema) => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        repositories: repositoriesReducer,
    };


    return configureStore<IStateSchema>( {
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    } );
};
