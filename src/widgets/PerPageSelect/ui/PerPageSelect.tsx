import React from 'react';
import cn from 'classnames';
import classes from './PerPageSelect.module.scss';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
    getRepositories,
    getRepositoriesPage,
    getRepositoriesPerPage,
    getRepositoriesQuery,
    repositoriesActions
} from 'entities/Repositories';
import { useNavigate } from 'react-router-dom';

interface IPerPageSelectProps {
    className?: string;
}

export const PerPageSelect: React.FC<IPerPageSelectProps> = (props) => {
    const {
        className = '',
    } = props;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const per_page = useSelector( getRepositoriesPerPage );
    const {
        query
    } = useSelector( getRepositoriesQuery );

    const handleChange = (event: SelectChangeEvent<string>) => {
        const {
            value
        } = event.target;

        dispatch( repositoriesActions.setPerPage( +value ) );
        dispatch( repositoriesActions.setPage( 1 ) );
        navigate( `/search?query=${ query }&page=${ 1 }&per_page=${ value }` );
        dispatch( getRepositories( {
            q: query,
            per_page: +value,
            page: 1,
        } ) );
    };

    return (
        <Box className={ cn( classes.perPageSelect, {}, [ className ] ) }>
            <FormControl variant='standard' fullWidth>
                <Select
                    value={ per_page + '' }
                    label="Кол-во"
                    onChange={ handleChange }
                >
                    <MenuItem value={ 10 }>10</MenuItem>
                    <MenuItem value={ 25 }>25</MenuItem>
                    <MenuItem value={ 50 }>50</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};
