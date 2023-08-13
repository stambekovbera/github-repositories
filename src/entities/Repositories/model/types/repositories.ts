import { IRepository } from 'entities/Repository';

export interface IRepositoriesFilter {
    query: string;
    total_count: number;
    page: number;
    per_page: number;
}

export interface IRepositoriesSchema {
    repositories: IRepository[];
    is_loading: boolean;
    is_error: boolean;
    error_text: string;
    filter: IRepositoriesFilter;
}
