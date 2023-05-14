import { useContext } from 'react'
import {
    Drawer,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Flex,
    Image,
    Text,
    Button,
    Icon,
} from '@chakra-ui/react'
import { IBook } from '../../../interfaces/IBooks'
import { AiFillStar } from 'react-icons/ai'
import { FavoriteBooksContext } from '../../../contexts/favoriteBooks.context'
import { COLORS } from '../../../styles/COLORS'

interface IPropsDrawerFavoriteBooks {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void 
}

interface IPropsCardFavoriteBook {
    book: IBook
}

const CardFavoriteBook = ({ book }: IPropsCardFavoriteBook) => {
    const { updateFavoriteBook } = useContext(FavoriteBooksContext)

    return (
        <Flex px={'5%'} gap={'10px'} my={'7px'}>
            <Image w={'40px'} h={'50px'} src={book.book_image} />
            <Flex
                alignItems={'start'}
                justifyContent={'center'}
                direction={'column'}
                w={'70%'}
            >
                <Text
                    fontSize={'14px'}
                    fontWeight={'bold'}
                    color='#0E1337'
                >
                    {
                        book.title
                    }
                </Text>
                <Flex>
                    <Text fontSize={'12px'} >                        
                        by {book.author}
                    </Text>
                    <Button w='25px' onClick={() => updateFavoriteBook(book)} >
                        <Icon as={AiFillStar} color={COLORS.primary} />
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

const DrawerFavoriteBooks = ({ isOpen, onOpen, onClose }: IPropsDrawerFavoriteBooks) => {    
    const { favoriteBooks } = useContext(FavoriteBooksContext)

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader color='#0B1A8E'>Favoritos</DrawerHeader>
                
                {
                    favoriteBooks.map((book, idx) => <CardFavoriteBook key={idx} book={book} />)
                }
                
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerFavoriteBooks