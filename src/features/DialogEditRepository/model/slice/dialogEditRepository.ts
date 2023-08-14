import { IDialogEditRepository } from '../types/dialogEditRepository';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRepository } from 'entities/Repository';

const initialState: IDialogEditRepository = {
    open: false,
    repository: null,
};

export const dialogEditRepositorySlice = createSlice( {
    name: 'dialogEditRepository',
    initialState,
    reducers: {
        deleteUser: (state) => {
            state.repository = {
                ...state.repository,
                owner: {
                    ...state.repository.owner,
                    deleted: true,
                },
            };
        },
        addUser: (state) => {
            state.repository = {
                ...state.repository,
                owner: {
                    ...state.repository.owner,
                    deleted: false,
                },
            };
        },

        changeUserName: (state, action: PayloadAction<string>) => {
            state.repository = {
                ...state.repository,
                owner: {
                    ...state.repository.owner,
                    login: action.payload,
                },
            };
        },

        setIsOpen: (state, action: PayloadAction<{
            isOpen: boolean;
            repository?: IRepository | null;
        }>) => {
            state.open = action.payload.isOpen;
            state.repository = action.payload?.repository || null;
        },
    },
} );

export const { actions: dialogEditRepositoryActions } = dialogEditRepositorySlice;
export const { reducer: dialogEditRepositoryReducer } = dialogEditRepositorySlice;
