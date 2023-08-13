import React from 'react';
import { Box, Container } from '@mui/material';
import cn from 'classnames';
import classes from './SearchPage.module.scss';
import { getRepositories, getRepositoriesState, Repositories, repositoriesActions } from 'entities/Repositories';
import { SearchRepoInput } from 'widgets/SearchRepoInput';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { PerPageSelect } from 'widgets/PerPageSelect';

interface ISearchPageProps {
    className?: string;
}

export const SearchPage: React.FC<ISearchPageProps> = (props) => {
    const {
        className = '',
    } = props;

    const dispatch = useDispatch();
    const {
        repositories
    } = useSelector( getRepositoriesState );

    const initPage = () => {
        const search = location.search || '';
        const parseSearch = queryString.parse( search, {
            arrayFormat: 'bracket',
        } );

        const page = +parseSearch?.page || 1;
        let query = parseSearch?.query || '';
        const per_page = +parseSearch?.per_page || 10;

        if (Array.isArray( query )) {
            query = query.join( ' ' );
        }

        dispatch( repositoriesActions.setQuery( query ) );
        dispatch( repositoriesActions.setNewQuery( query ) );
        dispatch( repositoriesActions.setPage( page ) );
        dispatch( repositoriesActions.setPerPage( per_page ) );
        dispatch( getRepositories( {
            page,
            per_page,
            q: query,
        } ) );
    };

    React.useEffect( () => {
        if (repositories.length <= 0) {
            initPage();
        }
    }, [] );

    return (
        <section className={ cn( classes.searchPage, {}, [ className ] ) }>
            <Container maxWidth='xl'>
                <Box className={ classes.searchPageInner }>
                    <Box className={ classes.searchInputWrapper }>
                        <SearchRepoInput/>
                    </Box>
                    <Box>
                        <PerPageSelect/>
                    </Box>
                    <Box width='100%'>
                        <Repositories/>
                    </Box>
                </Box>
            </Container>
        </section>
    );
};
