import React from 'react';
import cn from 'classnames';
import { AppRouter } from 'app/providers/router';
import { Toaster } from 'features/Toaster';

export const App = () => {

    return (
        <>
            <div className={ cn( 'wrapper', {}, [] ) }>
                <React.Suspense fallback="">
                    <AppRouter/>
                </React.Suspense>

                <Toaster/>
            </div>
        </>
    );
};
