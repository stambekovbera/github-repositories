import React from 'react';
import cn from 'classnames';
import classes from './PageError.module.scss';

interface IPageErrorProps {
    className?: string;
}

export const PageError: React.FC<IPageErrorProps> = (props) => {
    const {
        className,
    } = props;

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={ cn(classes.pageError, {}, [ className ]) }>
            <p>Непредвиденная ошибка, попробуйте перезагрузить страницу</p>
            <button onClick={ reloadPage }>
                Перезагрузить
            </button>
        </div>
    );
};
