import { IApiResult } from "../../interfaces/IApiResult"
import { useAxios } from "./useAxios"

export const useBooks = () => {
    const { Get } = useAxios()

    const GetBookGenre = async <T> () => {
        const { data, status } = await Get<IApiResult<T>>('/lists/names.json')

        return {
            data, 
            status
        }
    }

    const GetBooks = async <T> (genre: string) => {
        const { data, status } = await Get<IApiResult<T>>(`/lists/current/${genre}.json`)

        return {
            data, 
            status
        }        
    }

    return {
        GetBookGenre,
        GetBooks
    }    
}