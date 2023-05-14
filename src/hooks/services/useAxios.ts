import { axios } from "../../axios/axios" 


export const useAxios = () => {
    
    const Get = async <T> (url: string) => {
        const authorization: string = `?api-key=${process.env.REACT_APP_API_KEY}`
        
        const { status, data } = await axios.get<T>(url+authorization, {
            validateStatus: function (status) {
              return status < 500
            }
        })
        
        return {
            data,
            status
        }
    }

    return {
        Get
    }
}