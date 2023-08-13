import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getToasterDuration,
    getToasterMessage,
    getToasterOpen,
    getToasterType,
    toasterActions
} from 'features/Toaster';
import { Snackbar } from '@mui/material';
import cn from 'classnames';
import classes from './Toaster.module.scss';
import { Alert } from 'shared/ui/Alert/Alert';

interface IToasterProps {
    className?: string;
}

export const Toaster: React.FC<IToasterProps> = (props) => {
    const {
        className = '',
    } = props;

    const dispatch = useDispatch();
    const isOpen = useSelector( getToasterOpen );
    const duration = useSelector( getToasterDuration );
    const message = useSelector( getToasterMessage );
    const type = useSelector( getToasterType );

    const handleClose = (event: React.SyntheticEvent<any> | Event, reason: string) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch( toasterActions.setIsOpen( {
            isOpen: false,
            message: '',
            type: 'error',
        } ) );
    };

    return (
        <Snackbar
            className={ cn( classes.toaster, {}, [ className ] ) }
            open={ isOpen }
            autoHideDuration={ duration }
            onClose={ handleClose }
        >
            <Alert severity={ type } sx={ { width: '100%' } }>
                { message }
            </Alert>
        </Snackbar>
    );
};
