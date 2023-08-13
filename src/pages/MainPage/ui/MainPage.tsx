import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { SearchRepoInput } from 'widgets/SearchRepoInput';
import cn from 'classnames';
import classes from './MainPage.module.scss';

interface IMainPageProps {
    className?: string;
}

export const MainPage: React.FC<IMainPageProps> = (props) => {
    const {
        className = '',
    } = props;

    return (
        <section className={ cn( classes.mainPage, {}, [ className ] ) }>
            <Container maxWidth='xl'>
                <Box className={ classes.mainPageInner }>
                    <Typography variant='h1'>
                        Введите название репозитория для поиска
                    </Typography>
                    <SearchRepoInput/>
                </Box>
            </Container>
        </section>
    );
};
