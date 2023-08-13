import { createSelector } from '@reduxjs/toolkit';
import { getRepositoriesFilter } from '../getRepositoriesFilter/getFilter';
import { IRepositoriesFilter } from '../../types/repositories';

export const getRepositoriesPage = createSelector(
    getRepositoriesFilter,
    (filter: IRepositoriesFilter) => filter.page
);
