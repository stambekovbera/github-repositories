import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { IStateSchema } from './StateSchema';

export const createReduxStore = (initialState?: IStateSchema) => {
    const rootReducers: ReducersMapObject<IStateSchema> = {};


    return configureStore<IStateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};
