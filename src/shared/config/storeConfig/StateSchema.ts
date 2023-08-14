import { IRepositoriesSchema } from 'entities/Repositories';
import { IToasterSchema } from 'features/Toaster';
import { IDialogEditRepository } from 'features/DialogEditRepository';

export interface IStateSchema {
    repositories: IRepositoriesSchema;
    toaster: IToasterSchema;
    dialogEditRepository: IDialogEditRepository;
}
