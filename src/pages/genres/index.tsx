import { useEffect, useState, useContext } from 'react'
import { Layout } from "../../components/layout"
import { useBooks } from "../../hooks/services/useBooks"
import { IGenres } from '../../interfaces/IGenres'
import { CardGenre } from './components/cardGenre'
import { TypeRenderContext } from '../../contexts/typeRender.context'
import { Flex, Spinner, Wrap, WrapItem } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { delay } from '../../utils/delay'
import { COLORS } from '../../styles/COLORS'

const Genres = () => {
    let [searchParams] = useSearchParams();  
    const numberPage = Number(searchParams.get('numberPage')) || 1
    const search = searchParams.get('search') || ''

    const { typeRender } = useContext(TypeRenderContext)
    const renderInRow = typeRender === 'row'

    const { GetBookGenre } = useBooks()
    const [allGenres, setAllGenres] = useState<IGenres[]>([])

    const [loading, setLoading] = useState<boolean>(true)

    const loadingInfo = async () => {
        const { data, status } = await GetBookGenre<IGenres[]>()

        if(status >= 400){
            await delay(60)
            loadingInfo()
            return
        }

        setLoading(false)
        setAllGenres(data.results)
    }

    useEffect(() => {
        loadingInfo()
    }, [])

    const result = allGenres.filter((genre) => genre.display_name.toLowerCase().indexOf(search.toLowerCase()) + 1)

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
                            result.slice((numberPage - 1) * 5, numberPage * 5).map((genre, idx) =>
                                <WrapItem key={idx} w={{base: renderInRow ? '45%' : '100%', md: renderInRow ? "18%" : '100%'}}>
                                    <CardGenre genre={genre} />
                                </WrapItem>
                            )
                        }
                    </Wrap>
            }
        </Layout>
    )
}

export default Genres