export interface IApiResult <T> {
    status: string,
    errors?: string | string[],
    results: T
    num_results?: number
}