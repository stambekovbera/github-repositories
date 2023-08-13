import { createSelector } from '@reduxjs/toolkit';
import { getToasterState } from '../getToasterState/getToasterState';
import { IToasterSchema } from '../../types/toaster';

export const getToasterOpen = createSelector(
    getToasterState,
    (toaster: IToasterSchema) => toaster.is_open
);
