import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRepositoriesSchema } from '../types/repositories';
import { getRepositories } from 'entities/Repositories';

const initialState: IRepositoriesSchema = {
    error_text: '',
    is_error: false,
    is_loading: false,
    repositories: [],
    filter: {
        total_count: 0,
        page: 1,
        per_page: 10,
        query: '',
        new_query: '',
    },
};

export const repositoriesSlice = createSlice( {
    name: 'repositories',
    initialState,
    reducers: {
        setQuery: (state, action: PayloadAction<string>) => {
            state.filter.query = action.payload;
        },
        setNewQuery: (state, action: PayloadAction<string>) => {
            state.filter.new_query = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.filter.page = action.payload;
        },
        setPerPage: (state, action: PayloadAction<number>) => {
            state.filter.per_page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase( getRepositories.pending, (state) => {
                state.is_loading = true;
                state.is_error = false;
                state.error_text = '';
            } )
            .addCase( getRepositories.fulfilled, (state, action) => {
                state.is_loading = false;
                state.is_error = false;
                state.error_text = '';
                state.repositories = action.payload.items;
                state.filter.total_count = action.payload.total_count;
            } )
            .addCase( getRepositories.rejected, (state, action) => {
                state.is_loading = false;
                state.is_error = true;
                state.error_text = action.payload;
                state.repositories = [];
                state.filter.total_count = 0;
            } );
    },
} );

export const { actions: repositoriesActions } = repositoriesSlice;
export const { reducer: repositoriesReducer } = repositoriesSlice;
