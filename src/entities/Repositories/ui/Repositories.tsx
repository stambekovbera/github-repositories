import React from 'react';
import cn from 'classnames';
import { Typography } from '@mui/material';
import classes from './Repositories.module.scss';
import { useSelector } from 'react-redux';
import {
    getRepositoriesErrorText,
    getRepositoriesIsError,
    getRepositoriesIsLoading, getRepositoriesQuery,
    getRepositoriesState
} from 'entities/Repositories';
import { Repository } from 'entities/Repository';

interface IRepositoriesProps {
    className?: string;
}

export const Repositories: React.FC<IRepositoriesProps> = (props) => {
    const {
        className = '',
    } = props;

    const isLoading = useSelector( getRepositoriesIsLoading );
    const isError = useSelector( getRepositoriesIsError );
    const errorText = useSelector( getRepositoriesErrorText );
    const {
        repositories
    } = useSelector( getRepositoriesState );
    const {
        query
    } = useSelector( getRepositoriesQuery );

    const renderContent = () => {
        if (isError) {
            return (
                <Typography variant='h2' color='red'>
                    { errorText }
                </Typography>
            );
        }

        if (repositories.length <= 0) {
            return (
                <Typography variant='h2'>
                    Репозиториев с названием <span style={ { color: 'red' } }>{ query }</span> не найдено
                </Typography>
            );
        }

        return (
            <>
                <ul className={ cn( classes.repositories, {}, [ className ] ) }>
                    { repositories.map( (repository) => (
                        <li
                            key={ `repository-item-${ repository.id }` }
                        >
                            <Repository repository={ repository }/>
                        </li>
                    ) ) }
                </ul>
            </>
        );
    };

    return (
        <div>
            { isLoading
                ? (
                    <Typography variant='h2'>Идет поиск...</Typography>
                )
                : renderContent()
            }
        </div>
    );
};
