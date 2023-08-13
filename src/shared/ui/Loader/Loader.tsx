import React from 'react';
import classes from './Loader.module.scss';
import cn from 'classnames';

interface ILoaderProps {
    className?: string;
}

export const Loader: React.FC<ILoaderProps> = (props) => {
    const {
        className,
    } = props;
    return (
        <div className={ cn(classes.ldsEllipsis, {}, [ className ]) }>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
