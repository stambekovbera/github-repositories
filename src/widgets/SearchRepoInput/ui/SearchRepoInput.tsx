import React from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import { SearchRounded as SearchIcon } from '@mui/icons-material';
import cn from 'classnames';
import classes from './SearchRepoInput.module.scss';
import {
    getRepositories,
    getRepositoriesPage,
    getRepositoriesPerPage,
    getRepositoriesQuery,
    repositoriesActions
} from 'entities/Repositories';
import { useDispatch, useSelector } from 'react-redux';

interface ISearchRepoInputProps {
    className?: string;
}

export const SearchRepoInput: React.FC<ISearchRepoInputProps> = (props) => {
    const {
        className = '',
    } = props;
    
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
        dispatch( getRepositories( {
            page,
            per_page,
            q: query
        } ) );
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
