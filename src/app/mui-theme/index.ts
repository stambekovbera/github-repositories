import { createTheme } from '@mui/material/styles';
import {
    palette,
    typography
} from './common';
import {
    MuiButton,
    MuiInputBase,
    MuiDialogTitle,
    MuiDialogContent,
    MuiDialogActions,
    MuiOutlinedInput,
    MuiPagination,
    MuiBackdrop
} from './overrides';

const theme = createTheme( {
    palette,
    typography,

    components: {
        MuiButton,
        MuiInputBase,
        MuiDialogTitle,
        MuiDialogContent,
        MuiDialogActions,
        MuiOutlinedInput,
        MuiPagination,
        MuiBackdrop,
    },
} );

export default theme;
