import { Provider } from 'react-redux';
import React from 'react';
import { createReduxStore } from 'shared/config/storeConfig/store';
import { IStateSchema } from 'shared/config/storeConfig/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { PersistGate } from 'redux-persist/integration/react';

interface IStoreProviderProps {
    children: React.ReactNode;
    initialState?: DeepPartial<IStateSchema>;
}

export const StoreProvider: React.FC<IStoreProviderProps> = (props) => {
    const {
        children,
        initialState
    } = props;

    const {
        store,
        persistor
    } = createReduxStore(
        initialState as IStateSchema,
    );

    return (
        <Provider store={ store }>
            <PersistGate loading={ '' } persistor={ persistor }>
                { children }
            </PersistGate>
        </Provider>
    );
};
