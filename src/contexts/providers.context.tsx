import { IPropsChildren } from "../interfaces/IPropsChildren";
import { FavoriteBooksContextProvider } from "./favoriteBooks.context";
import { TypeRenderProvider } from "./typeRender.context";

export const ProvidersContext = ({ children }: IPropsChildren) => {
    return (
        <FavoriteBooksContextProvider>
            <TypeRenderProvider>
                { children }
            </TypeRenderProvider>
        </FavoriteBooksContextProvider>
    )
}