import { createSelector } from '@reduxjs/toolkit';
import { getToasterState } from '../getToasterState/getToasterState';
import { IToasterSchema } from '../../types/toaster';

export const getToasterDuration = createSelector(
    getToasterState,
    (toaster: IToasterSchema) => toaster.duration
);
