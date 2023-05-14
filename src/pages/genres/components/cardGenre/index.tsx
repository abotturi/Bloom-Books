import { Flex, Text } from "@chakra-ui/react"
import { IGenres } from "../../../../interfaces/IGenres"
import { PublicationInfo, Title, UpdateInfo } from "./style"
import { formatDate } from "../../../../utils/formatDate"
import { useContext } from "react"
import { TypeRenderContext } from "../../../../contexts/typeRender.context"
import { useNavigate } from "react-router-dom"

interface IPropsCardGenre {
    genre: IGenres
}

export const CardGenre = ({ genre }: IPropsCardGenre) => {
    const navigate = useNavigate()

    const { typeRender } = useContext(TypeRenderContext)
    const renderInRow = typeRender === 'row'

    const handleGoBooks = () => {
        navigate(`/${genre.list_name_encoded}/${genre.display_name}`)
    }

    return (
        <Flex 
            onClick={handleGoBooks}
            flex={1}
            my={'20px'}
            cursor={'pointer'}
            alignItems={{base: 'normal', md: renderInRow ? 'normal' : 'center'}}
            justifyContent={'space-between'}
            direction={{base: 'column', md: renderInRow ? 'column' : 'row'}}
        >
            <Flex
                alignItems={{base: 'normal', md: renderInRow ? 'normal' : 'center'}}
                w={{base: '100%', md: renderInRow ? '100%' : '50%'}}
                direction={{base: 'column', md: renderInRow ? 'column' : 'row'}}
                gap={{base: 0, md: renderInRow ? 0 : '15px'}}
                mb={{base: '10px', md: renderInRow ? '10px' : 0}}
            >
                <Title fontSize={{base: '18px', md: '20px'}}>
                    {genre.display_name}
                </Title>
                <UpdateInfo>
                    Atualizada a {genre.updated === 'WEEKLY' && 'uma semana'} {genre.updated === 'MONTHLY' && 'um mês'}
                </UpdateInfo>
            </Flex>
            <Flex
                justifyContent={'space-between'}
                direction={{base: 'column', md: renderInRow ? 'column' : 'row'}}
                w={{base: '100%', md: renderInRow ? '100%' : '45%'}}
            >
                <PublicationInfo>
                    Última publicação: {formatDate(genre.newest_published_date)}
                </PublicationInfo>
                <PublicationInfo>
                    Publicação mais antiga: {formatDate(genre.oldest_published_date)}
                </PublicationInfo>
            </Flex>
        </Flex>
    )
}
