import { IRepositoriesSchema } from 'entities/Repositories';
import { IToasterSchema } from 'features/Toaster';

export interface IStateSchema {
    repositories: IRepositoriesSchema;
    toaster: IToasterSchema;
}
