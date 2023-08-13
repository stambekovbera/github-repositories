import React from 'react';
import classes from './NotFoundPage.module.scss';
import cn from 'classnames';

interface INotFoundPageProps {
    className?: string;
}

export const NotFoundPage: React.FC<INotFoundPageProps> = (props) => {
    const { className } = props;
    return (
        <div className={ cn(classes.notFoundPage, {}, [ className ]) }>
            404
        </div>
    );
};
