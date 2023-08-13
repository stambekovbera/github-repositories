import { createSelector } from '@reduxjs/toolkit';
import { getToasterState } from '../getToasterState/getToasterState';
import { IToasterSchema } from '../../types/toaster';

export const getToasterMessage = createSelector(
    getToasterState,
    (toaster: IToasterSchema) => toaster.message
);
