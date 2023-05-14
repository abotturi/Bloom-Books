import { useContext } from 'react'
import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { IBook } from "../../../../interfaces/IBooks"
import { TypeRenderContext } from "../../../../contexts/typeRender.context"
import { Title } from './style'
import { FavoriteBooksContext } from '../../../../contexts/favoriteBooks.context'
import { COLORS } from '../../../../styles/COLORS'

interface IPropsCardBook {
    book: IBook
}

export const CardBook = ({ book }: IPropsCardBook) => {
    const { updateFavoriteBook, checkBookIsFavorite } = useContext(FavoriteBooksContext)
    const { typeRender } = useContext(TypeRenderContext)

    const renderInRow = typeRender === 'row'
    
    return (
        <Flex        
            alignItems={renderInRow ? 'center' : 'start'}
            justifyContent={'start'}
            direction={renderInRow ? 'column' : 'row'}
            h='100%'
            w='100%'
        >
            <Image w={"120px"} h={'167px'} src={book.book_image} />
            <Flex direction={'column'} ml={renderInRow ? 0 : '18px'} flex='1' justifyContent={'space-between'}>
                <Flex
                    alignItems={{base: 'normal', md: renderInRow ? 'normal' : 'center'}}
                    gap={{base: 0, md: renderInRow ? 0 : '15px'}}
                    direction={{base: 'column', md: renderInRow ? 'column' : 'row'}}
                >
                    <Title fontSize={{ base: '14px', md: '16px' }} mt={{base: renderInRow ? '10px' : 0, md: renderInRow ? '10px' : 0}} >
                        {book.title}
                    </Title>
                    <Flex>
                        <Text fontSize={{ base: '12px', md: '14px' }} >                        
                            by {book.author}
                        </Text>
                        <Button w='25px' onClick={() => updateFavoriteBook(book)} >
                            <Icon as={checkBookIsFavorite(book.title) ? AiFillStar : AiOutlineStar} color={COLORS.primary} />
                        </Button>
                    </Flex>
                </Flex>
                <Text color='#0E1337' fontSize={{ base: '12px', md: '14px' }} mt={{base: '10px', md: renderInRow ? '10px' : 0}} >
                    {book.description}
                </Text>
                <Text fontSize={{ base: '12px', md: '14px' }} mt='12px'>
                    Editora {book.publisher}
                </Text>
                <Text fontSize={{ base: '12px', md: '14px' }} mt='8px'>
                    Rank {book.rank}
                </Text>
                <Button
                    color='white'
                    bg={COLORS.primary}
                    py={'8px'}
                    px={'12px'}
                    borderRadius={360}
                    fontWeight={'bold'}
                    fontSize={'12px'}
                    mt='20px'
                    mx={{base: 'auto', md: renderInRow ? 'auto' : 0}}
                    alignSelf={'flex-start'}
                >
                    Compre por R${book.price.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </Button>
            </Flex>
        </Flex>
    )
}