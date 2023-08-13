import React from 'react';
import cn from 'classnames';

export const App = () => {

    return (
        <div className={ cn('wrapper', {}, []) }>
            <React.Suspense fallback="">
                <div>Контент</div>
            </React.Suspense>
        </div>
    );
};
