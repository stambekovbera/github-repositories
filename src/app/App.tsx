import React from 'react';
import cn from 'classnames';
import { Container } from '@mui/material';
import { AppRouter } from 'app/providers/router';

export const App = () => {

    return (
        <div className={ cn( 'wrapper', {}, [] ) }>
            <React.Suspense fallback="">
                <AppRouter/>
            </React.Suspense>
        </div>
    );
};
