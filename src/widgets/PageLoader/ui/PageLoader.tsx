import React from 'react';
import cn from 'classnames';
import { Loader } from 'shared/ui/Loader/Loader';

import classes from './PageLoader.module.scss';

interface IPageLoaderProps {
    className?: string;
}

export const PageLoader: React.FC<IPageLoaderProps> = (props) => {
    const {
        className,
    } = props;
    return (
        <div className={ cn(classes.pageLoader, {}, [ className ]) }>
            <Loader/>
        </div>
    );
};
