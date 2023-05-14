import { createContext, useState } from "react";
import { IPropsChildren } from "../interfaces/IPropsChildren";
import { IBook } from "../interfaces/IBooks";

interface IFavoriteBooks {
    favoriteBooks: IBook[],
    updateFavoriteBook: (book: IBook) => void,
    checkBookIsFavorite: (title: string) => boolean,
    removeFavoriteBook: (title: string) => void
}

export const FavoriteBooksContext = createContext<IFavoriteBooks>({} as IFavoriteBooks)

export const FavoriteBooksContextProvider = ({ children }: IPropsChildren) => {
    const [favoriteBooks, setFavoriteBooks] = useState<IBook[]>([])

    const checkBookIsFavorite = (title: string) => {
        const checkBook: IBook[] = favoriteBooks.filter(book => book.title === title)

        return checkBook.length > 0
    }

    const updateFavoriteBook = (book: IBook) => {
        if(checkBookIsFavorite(book.title)){
            removeFavoriteBook(book.title)
            return
        }

        setFavoriteBooks(current => [...current, book])
    }

    const removeFavoriteBook = (title: string) => {
        setFavoriteBooks(current => current.filter(book => book.title !== title))
    }

    return (
        <FavoriteBooksContext.Provider value={{
            favoriteBooks,
            updateFavoriteBook,
            checkBookIsFavorite,
            removeFavoriteBook
        }}>
            {children}
        </FavoriteBooksContext.Provider>
    )
}