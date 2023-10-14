export interface IError extends Error {
    message: string,
    statusText: string,
    status: number
}