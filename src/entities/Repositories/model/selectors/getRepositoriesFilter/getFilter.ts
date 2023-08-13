import { createSelector } from '@reduxjs/toolkit';
import { IRepositoriesSchema } from '../../types/repositories';
import { getRepositoriesState } from '../getRepositoriesState/getRepositoriesState';

export const getRepositoriesFilter = createSelector(
    getRepositoriesState,
    (repositories: IRepositoriesSchema) => repositories.filter
);
