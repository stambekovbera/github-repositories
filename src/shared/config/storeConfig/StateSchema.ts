import { IRepositoriesSchema } from 'entities/Repositories';

export interface IStateSchema {
    repositories: IRepositoriesSchema;
}

export type StateSchemaKey = keyof IStateSchema;
