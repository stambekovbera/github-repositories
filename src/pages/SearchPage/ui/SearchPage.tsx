import React from 'react';
import { Box, Container } from '@mui/material';
import cn from 'classnames';
import classes from './SearchPage.module.scss';
import { Repositories, repositoriesActions } from 'entities/Repositories';
import { SearchRepoInput } from 'widgets/SearchRepoInput';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import { PerPageSelect } from 'widgets/PerPageSelect';

interface ISearchPageProps {
    className?: string;
}

export const SearchPage: React.FC<ISearchPageProps> = (props) => {
    const {
        className = '',
    } = props;

    const dispatch = useDispatch();

    const initPage = () => {
        const search = location.search || '';
        const parseSearch = queryString.parse( search, {
            arrayFormat: 'bracket',
        } );

        let query = parseSearch?.query || '';

        if (Array.isArray( query )) {
            query = query.join( ' ' );
        }

        dispatch( repositoriesActions.setNewQuery( query ) );
    };

    React.useEffect( () => {
        initPage();
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
