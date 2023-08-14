import React from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
    Tooltip,
    Typography
} from '@mui/material';
import { AddCircleRounded as PlusIcon, RemoveCircleRounded as MinusIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import {
    getDialogEditRepositoryState
} from '../model/selectors/getDialogEditRepositoryState/getDialogEditRepositoryState';
import cn from 'classnames';
import classes from './DialogEditRepository.module.scss';
import { dialogEditRepositoryActions } from 'features/DialogEditRepository';

interface IDialogEditRepositoryProps {
    className?: string;
}

export const DialogEditRepository: React.FC<IDialogEditRepositoryProps> = (props) => {
    const {
        className = '',
    } = props;

    const dispatch = useDispatch();
    const {
        open,
        repository
    } = useSelector( getDialogEditRepositoryState );

    const onClose = () => {
        dispatch( dialogEditRepositoryActions.setIsOpen( {
            isOpen: false,
            repository: null,
        } ) );
    };

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const {
            value
        } = event.target;

        dispatch( dialogEditRepositoryActions.changeUserName( value ) );
    };

    const onAddUser = () => {
        dispatch( dialogEditRepositoryActions.addUser() );
    };

    const onDeleteUser = () => {
        dispatch( dialogEditRepositoryActions.deleteUser() );
    };

    return (
        <Dialog
            fullWidth
            maxWidth='md'
            open={ Boolean( open && repository ) }
            className={ cn( classes.dialogEditRepository, {}, [ className ] ) }
            onClose={ onClose }
        >
            <DialogTitle>
                Репозиторий { repository?.id || '' } - { repository?.name || '' }
            </DialogTitle>
            <DialogContent>
                <Box className={ classes.rowContent }>
                    <Typography variant='h6'>Уникальный идентификатор:</Typography>
                    <Typography variant='h4'>{ repository?.id || '' }</Typography>
                </Box>
                <Box className={ classes.rowContent }>
                    <Typography variant='h6'>Название репозитория: </Typography>
                    <Typography variant='h4'>{ repository?.name || '' }</Typography>
                </Box>
                <Box className={ classes.rowContent }>
                    <Typography variant='h6'>Количество звезд: </Typography>
                    <Typography variant='h4'>{ repository?.stargazers_count || '' }</Typography>
                </Box>
                <Box className={ classes.rowContent }>
                    <Typography variant='h6'>Количество просмотров: </Typography>
                    <Typography variant='h4'>{ repository?.watchers_count || '' }</Typography>
                </Box>
                <Box>
                    <Box className={ classes.rowContent }>
                        <Typography variant='h6'>Пользователь:</Typography>
                        <Tooltip title={ repository?.owner?.deleted ? 'Добавить' : 'Удалить' }>
                            { repository?.owner?.deleted
                                ? (
                                    <IconButton color='success' onClick={ onAddUser }>
                                        <PlusIcon/>
                                    </IconButton>
                                )
                                : (
                                    <IconButton color='error' onClick={ onDeleteUser }>
                                        <MinusIcon/>
                                    </IconButton>
                                )
                            }
                        </Tooltip>
                    </Box>
                    { Boolean( !repository?.owner?.deleted )
                        && (
                            <Box>
                                <Box className={ classes.rowContent }>
                                    <Typography variant='h6'>Имя пользователя:</Typography>
                                    <TextField
                                        value={ repository?.owner?.login }
                                        onChange={ onChange }
                                    />
                                </Box>
                            </Box>
                        )
                    }
                </Box>
            </DialogContent>
            <DialogActions>
                <Button
                    variant='outlined'
                    onClick={ onClose }
                >
                    Отменить
                </Button>
                <Button
                    variant='contained'
                >
                    Сохранить
                </Button>
            </DialogActions>
        </Dialog>
    );
};
