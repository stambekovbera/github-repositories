import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IToasterSchema, toasterType } from '../types/toaster';

const initialState: IToasterSchema = {
    duration: 6000,
    is_open: false,
    message: '',
    type: 'success',
};

export const toasterSlice = createSlice( {
    name: 'toaster',
    initialState,
    reducers: {
        setIsOpen: (state, action: PayloadAction<{
            message: string;
            isOpen: boolean;
            type: toasterType;
            duration?: number;
        }>) => {
            state.is_open = action.payload.isOpen;
            state.message = action.payload.message;
            state.type = action.payload?.type || 'success';
            state.duration = action.payload?.duration || 6000;
        },
    },
} );

export const { actions: toasterActions, reducer: toasterReducer } = toasterSlice;
