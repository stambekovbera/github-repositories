import { Provider } from 'react-redux';
import React from 'react';
import { createReduxStore } from 'shared/config/storeConfig/store';
import { IStateSchema } from 'shared/config/storeConfig/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';

interface IStoreProviderProps {
    children: React.ReactNode;
    initialState?: DeepPartial<IStateSchema>;
}

export const StoreProvider: React.FC<IStoreProviderProps> = (props) => {
    const {
        children,
        initialState
    } = props;

    const store = createReduxStore(
        initialState as IStateSchema,
    );

    return (
        <Provider store={ store }>
            { children }
        </Provider>
    );
};
