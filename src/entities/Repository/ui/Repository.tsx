import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Box, Typography, Button } from '@mui/material';
import {
    StarRounded as StarIcon,
    VisibilityRounded as EyeIcon
} from '@mui/icons-material';
import { IRepository } from '../model/types/repository';
import cn from 'classnames';
import classes from './Repository.module.scss';
import { useDispatch } from 'react-redux';
import { dialogEditRepositoryActions } from 'features/DialogEditRepository';

interface IRepositoryProps {
    repository: IRepository;
    className?: string;
}

export const Repository: React.FC<IRepositoryProps> = (props) => {
    const {
        repository,
        className = '',
    } = props;

    const dispatch = useDispatch();

    const openDialogEdit = () => {
        dispatch( dialogEditRepositoryActions.setIsOpen( {
            isOpen: true,
            repository: repository,
        } ) );
    };

    return (
        <Box className={ cn( classes.repository, {}, [ className ] ) }>
            <Link
                to={ repository.html_url }
                target='_blank'
            >
                <Typography variant='h3'>
                    { repository.name }
                </Typography>
            </Link>

            { !repository.owner.deleted
                ? (
                    <Link
                        className={ classes.authorWrapper }
                        to={ repository.owner.html_url }
                        target='_blank'
                    >
                        <Avatar
                            sx={ { width: 50, height: 50 } }
                            alt={ repository.owner.login }
                            src={ repository.owner.avatar_url }
                        />
                        <Typography variant='h3'>{ repository.owner.login }</Typography>
                    </Link>
                )
                : (
                    <Typography variant='h3'>Автор удален</Typography>
                )
            }

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
            <Button fullWidth variant='contained' onClick={ openDialogEdit }>
                Подробно
            </Button>
        </Box>
    );
};
