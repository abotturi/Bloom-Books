import { BrowserRouter, Route, Routes } from "react-router-dom"
import Genres from "../pages/genres"
import Books from "../pages/books"

const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Genres />} path='/' />
                <Route element={<Books />} path='/:genreCode/:genreSelect' />
            </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes