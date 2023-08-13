import { createSelector } from '@reduxjs/toolkit';
import { getRepositoriesState } from '../getRepositoriesState/getRepositoriesState';
import { IRepositoriesSchema } from '../../types/repositories';

export const getRepositoriesIsError = createSelector(
    getRepositoriesState,
    (repositories: IRepositoriesSchema) => repositories.is_error
);
