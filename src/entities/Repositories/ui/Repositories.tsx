import React from 'react';
import cn from 'classnames';
import { Box, Pagination, Typography } from '@mui/material';
import classes from './Repositories.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
    getRepositories,
    getRepositoriesErrorText,
    getRepositoriesIsError,
    getRepositoriesIsLoading,
    getRepositoriesPage,
    getRepositoriesPerPage,
    getRepositoriesQuery,
    getRepositoriesState,
    getRepositoriesTotalCount, repositoriesActions
} from 'entities/Repositories';
import { Repository } from 'entities/Repository';
import { useNavigate } from 'react-router-dom';

interface IRepositoriesProps {
    className?: string;
}

export const Repositories: React.FC<IRepositoriesProps> = (props) => {
    const {
        className = '',
    } = props;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector( getRepositoriesIsLoading );
    const isError = useSelector( getRepositoriesIsError );
    const errorText = useSelector( getRepositoriesErrorText );
    const {
        repositories
    } = useSelector( getRepositoriesState );
    const {
        query
    } = useSelector( getRepositoriesQuery );
    const page = useSelector( getRepositoriesPage );
    const totalCount = useSelector( getRepositoriesTotalCount );
    const per_page = useSelector( getRepositoriesPerPage );

    const changePagination = (event: React.ChangeEvent<unknown>, newPage: number) => {
        dispatch( repositoriesActions.setPage( newPage ) );
        navigate( `/search?query=${ query }&page=${ newPage }&per_page=${ per_page }` );
        dispatch( getRepositories( {
            q: query,
            page: newPage,
            per_page,
        } ) );
    };

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

            <Box className={ classes.repositoriesWrapper }>
                <ul className={ cn( classes.repositories, {}, [ className ] ) }>
                    { repositories.map( (repository) => (
                        <li
                            key={ `repository-item-${ repository.id }` }
                        >
                            <Repository repository={ repository }/>
                        </li>
                    ) ) }
                </ul>

                <Pagination
                    page={ page }
                    count={ Math.ceil( totalCount / per_page ) }

                    onChange={ changePagination }
                />
            </Box>
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
