import React from 'react';
import cn from 'classnames';
import classes from './Alert.module.scss';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface IAlertProps extends AlertProps {
    className?: string;
}

export const Alert = React.forwardRef<HTMLDivElement, IAlertProps>( function Alert(
    props,
    ref,
) {
    
    const {
        className
    } = props;

    return <MuiAlert
        className={ cn( classes.alert, {}, [ className ] ) }
        elevation={ 6 }
        ref={ ref }
        variant="filled"
        { ...props }
    />;
} );
