import { useEffect, useState, useContext } from 'react'
import { Layout } from "../../components/layout"
import { useBooks } from "../../hooks/services/useBooks"
import { IGenres } from '../../interfaces/IGenres'
import { TypeRenderContext } from '../../contexts/typeRender.context'
import { Wrap, WrapItem, Spinner, Box, Flex } from '@chakra-ui/react'
import { useParams, useSearchParams } from 'react-router-dom'
import { IBook } from '../../interfaces/IBooks'
import { CardBook } from './components/cardBook'
import { delay } from '../../utils/delay'
import { COLORS } from '../../styles/COLORS'

interface IBooksResult {
    books: IBook[]
}

const Books  = () => {
    const { genreCode } = useParams()

    let [searchParams] = useSearchParams();  
    const numberPage = Number(searchParams.get('numberPage')) || 1
    const search = searchParams.get('search') || ''

    const { typeRender } = useContext(TypeRenderContext)
    const renderInRow = typeRender === 'row'

    const { GetBooks } = useBooks()
    const [allBooks, setAllBooks] = useState<IBook[]>([])

    const [loading, setLoading] = useState<boolean>(true)

    const loadingInfo = async () => {
        const { data, status } = await GetBooks<IBooksResult>(genreCode!)

        if(status >= 400){
            await delay(60)
            loadingInfo()
            return
        }

        setAllBooks(data.results.books)
        setLoading(false)
    }

    useEffect(() => {
        loadingInfo()
    }, [])
    
    const result = allBooks.filter((book) => book.title.toLowerCase().indexOf(search.toLowerCase()) + 1)

    return (
        <Layout totalItems={result.length}>
            {
                loading ? 
                    <Flex
                        mt={'20px'}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Spinner
                            color={COLORS.primary}
                            w={'20px'}
                            h={'20px'}
                            speed='1s'    
                        />
                    </Flex>
                    :
                    <Wrap
                        justify='space-between'
                    >
                        {
                            result.slice((numberPage - 1) * 5, numberPage * 5).map((book, idx) =>
                                <WrapItem key={idx} style={{marginTop: '25px'}} w={{base: renderInRow ? '45%' : '100%', md: renderInRow ? "18%" : '100%'}}>
                                    <CardBook book={book} />
                                </WrapItem>
                            )
                        }
                    </Wrap>
            }
        </Layout>
    )
}

export default Books