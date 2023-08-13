export type toasterType = 'error' | 'warning' | 'info' | 'success';

export interface IToasterSchema {
    is_open: boolean;
    message: string;
    duration: number;
    type: toasterType;
}
