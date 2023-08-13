import React from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import { SearchRounded as SearchIcon } from '@mui/icons-material';
import cn from 'classnames';
import {
    getRepositories,
    getRepositoriesPage,
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
    const query = useSelector( getRepositoriesQuery );
    const page = useSelector( getRepositoriesPage );
    const per_page = useSelector( getRepositoriesPerPage );

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const {
            value
        } = event.target;

        dispatch( repositoriesActions.setQuery( value ) );
    };

    const onSearch = () => {
        if (query.length > 5) {
            navigate( `/search?query=${ query }&page=${ page }&per_page=${ per_page }` );
            dispatch( getRepositories( {
                page,
                per_page,
                q: query
            } ) );
        } else {
            dispatch( toasterActions.setIsOpen( {
                isOpen: true,
                message: 'Минимальная длина 5 символов!',
                type: 'error',
            } ) );
        }
    };

    return (
        <Box className={ cn( classes.searchRepoInputWrapper, {}, [ className ] ) }>
            <TextField
                className={ classes.searchRepoInput }
                placeholder='Название репозитория'
                value={ query }
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
