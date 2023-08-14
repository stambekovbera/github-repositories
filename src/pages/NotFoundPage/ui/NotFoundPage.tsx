import React from 'react';
import classes from './NotFoundPage.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';

interface INotFoundPageProps {
    className?: string;
}

export const NotFoundPage: React.FC<INotFoundPageProps> = (props) => {
    const { className } = props;
    return (
        <div className={ cn( classes.notFoundPage, {}, [ className ] ) }>
            Такой страницы не существует
            <Link to='/'>
                Главная
            </Link>
        </div>
    );
};
