import { createSelector } from '@reduxjs/toolkit';
import { getRepositoriesState } from '../getRepositoriesState/getRepositoriesState';
import { IRepositoriesSchema } from '../../types/repositories';

export const getRepositoriesErrorText = createSelector(
    getRepositoriesState,
    (repositories: IRepositoriesSchema) => repositories.error_text
);
