import React from 'react';
import { Box, Container } from '@mui/material';
import cn from 'classnames';
import classes from './SearchPage.module.scss';
import { Repositories } from 'entities/Repositories';
import { SearchRepoInput } from 'widgets/SearchRepoInput';

interface ISearchPageProps {
    className?: string;
}

export const SearchPage: React.FC<ISearchPageProps> = (props) => {
    const {
        className = '',
    } = props;
    return (
        <section className={ cn( classes.searchPage, {}, [ className ] ) }>
            <Container maxWidth='xl'>
                <Box className={ classes.searchPageInner }>
                    <Box className={ classes.searchInputWrapper }>
                        <SearchRepoInput/>
                    </Box>
                    <Box>
                        <Repositories/>
                    </Box>
                </Box>
            </Container>
        </section>
    );
};
