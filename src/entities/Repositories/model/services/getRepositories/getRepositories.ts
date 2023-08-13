import { createAsyncThunk } from '@reduxjs/toolkit';
import { agent } from 'shared/lib/agent/agent';
import { IRepository } from 'entities/Repository';

interface IGetRepositoriesProps {
    q: string;
    per_page: number;
    page: number;
}

interface IGetRepositoriesResult {
    total_count: number;
    incomplete_results: boolean;
    items: IRepository[];
}

export const getRepositories = createAsyncThunk<IGetRepositoriesResult, IGetRepositoriesProps, {
    rejectValue: string
}>(
    'repositories/getRepositories',
    async (arg, thunkAPI) => {
        try {
            const response = await agent.get<IGetRepositoriesResult>( `search/repositories?q=${ arg.q }&page=${ arg.page }&per_page=${ arg.per_page }` )
                .then( (res) => res.data );

            thunkAPI.fulfillWithValue( response );

            return response;
        } catch (err) {
            return thunkAPI.rejectWithValue( err.response?.data?.message || 'Ошибка при поиске репозиториев' );
        }
    }
);
