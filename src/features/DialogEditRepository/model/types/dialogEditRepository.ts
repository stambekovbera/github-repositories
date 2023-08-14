import { IRepository } from 'entities/Repository';

export interface IDialogEditRepository {
    open: boolean;
    repository: IRepository | null;
}
