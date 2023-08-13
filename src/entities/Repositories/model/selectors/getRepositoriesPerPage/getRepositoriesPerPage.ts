import { createSelector } from '@reduxjs/toolkit';
import { getRepositoriesFilter } from '../getRepositoriesFilter/getFilter';
import { IRepositoriesFilter } from '../../types/repositories';

export const getRepositoriesPerPage = createSelector(
    getRepositoriesFilter,
    (filter: IRepositoriesFilter) => filter.per_page
);
