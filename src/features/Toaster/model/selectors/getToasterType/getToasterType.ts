import { createSelector } from '@reduxjs/toolkit';
import { getToasterState } from '../getToasterState/getToasterState';
import { IToasterSchema } from '../../types/toaster';

export const getToasterType = createSelector(
    getToasterState,
    (toaster: IToasterSchema) => toaster.type
);
