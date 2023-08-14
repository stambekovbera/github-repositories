import React from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import { SearchRounded as SearchIcon } from '@mui/icons-material';
import cn from 'classnames';
import {
    getRepositories,
    getRepositoriesPerPage,
    getRepositoriesQuery,
    repositoriesActions
} from 'entities/Repositories';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './SearchRepoInput.module.scss';
import { toasterActions } from 'features/Toaster';

interface ISearchRepoInputProps {
    className?: string;
}

export const SearchRepoInput: React.FC<ISearchRepoInputProps> = (props) => {
    const {
        className = '',
    } = props;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { new_query, query } = useSelector( getRepositoriesQuery );
    const per_page = useSelector( getRepositoriesPerPage );

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const {
            value
        } = event.target;

        dispatch( repositoriesActions.setNewQuery( value ) );
    };

    const onSearch = () => {
        if (new_query.length > 5) {
            dispatch( repositoriesActions.setQuery( new_query ) );
            dispatch( repositoriesActions.setPage( 1 ) );
            navigate( `/search?query=${ new_query }&page=${ 1 }&per_page=${ per_page }` );
            dispatch( getRepositories( {
                page: 1,
                per_page,
                q: new_query
            } ) );
        } else {
            dispatch( toasterActions.setIsOpen( {
                isOpen: true,
                message: 'Минимальная длина поисковой строки 5 символов!',
                type: 'error',
            } ) );
        }
    };

    return (
        <Box className={ cn( classes.searchRepoInputWrapper, {}, [ className ] ) }>
            <TextField
                className={ classes.searchRepoInput }
                placeholder='Название репозитория'
                value={ new_query }
                InputProps={ {
                    endAdornment: <IconButton className={ classes.inputButton } color='secondary' onClick={ onSearch }>
                        <SearchIcon color='secondary'/>
                    </IconButton>,
                } }
                onChange={ handleChange }
            />
        </Box>
    );
};
