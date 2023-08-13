import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Box, Typography } from '@mui/material';
import {
    StarRounded as StarIcon,
    VisibilityRounded as EyeIcon
} from '@mui/icons-material';
import { IRepository } from '../model/types/repository';
import cn from 'classnames';
import classes from './Repository.module.scss';

interface IRepositoryProps {
    repository: IRepository;
    className?: string;
}

export const Repository: React.FC<IRepositoryProps> = (props) => {
    const {
        repository,
        className = '',
    } = props;
    return (
        <Box className={ cn( classes.repository, {}, [ className ] ) }>
            <Typography variant='h3'>
                { repository.name }
            </Typography>

            <Link className={ classes.authorWrapper } to={ repository.owner.html_url }>
                <Avatar
                    sx={ { width: 50, height: 50 } }
                    alt={ repository.owner.login }
                    src={ repository.owner.avatar_url }
                />
                <Typography variant='h3'>{ repository.owner.login }</Typography>
            </Link>

            <Box className={ classes.repositoryStatistics }>
                <Box className={ classes.repositoryStatistic }>
                    <StarIcon/>
                    <Typography variant='h6'>
                        { repository.stargazers_count }
                    </Typography>
                </Box>
                <Box className={ classes.repositoryStatistic }>
                    <EyeIcon/>
                    <Typography variant='h6'>
                        { repository.watchers_count }
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
