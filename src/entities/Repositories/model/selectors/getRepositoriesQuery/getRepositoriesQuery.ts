import { createSelector } from '@reduxjs/toolkit';
import { getRepositoriesFilter } from '../getRepositoriesFilter/getFilter';
import { IRepositoriesFilter } from '../../types/repositories';

export const getRepositoriesQuery = createSelector(
    getRepositoriesFilter,
    (filter: IRepositoriesFilter) => {
        return {
            query: filter.query,
            new_query: filter.new_query,
        };
    }
);
