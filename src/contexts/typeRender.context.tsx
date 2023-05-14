import { createContext, useState } from "react";
import { IPropsChildren } from "../interfaces/IPropsChildren";

interface ITypeRenderProvider {
    typeRender: 'list' | 'row'
    updateType: () => void
}

export const TypeRenderContext = createContext<ITypeRenderProvider>({} as ITypeRenderProvider)

export const TypeRenderProvider = ({ children }: IPropsChildren) => {
    const [typeRender, setTypeRender] = useState<'list' | 'row'>('list')

    const updateType = () => {
        if(typeRender === 'list'){
            setTypeRender('row')
            return
        }

        setTypeRender('list')
    }

    return (
        <TypeRenderContext.Provider value={{
            typeRender,
            updateType
        }}>
            {children}
        </TypeRenderContext.Provider>
    )
}