import { createSelector } from '@reduxjs/toolkit';
import { getRepositoriesState } from '../getRepositoriesState/getRepositoriesState';
import { IRepositoriesSchema } from '../../types/repositories';

export const getRepositoriesIsLoading = createSelector(
    getRepositoriesState,
    (repositories: IRepositoriesSchema) => repositories.is_loading
);
