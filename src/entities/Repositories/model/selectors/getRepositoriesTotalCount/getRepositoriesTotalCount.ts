import { createSelector } from '@reduxjs/toolkit';
import { getRepositoriesFilter } from '../getRepositoriesFilter/getFilter';
import { IRepositoriesFilter } from '../../types/repositories';

export const getRepositoriesTotalCount = createSelector(
    getRepositoriesFilter,
    (filter: IRepositoriesFilter) => filter.total_count
);
