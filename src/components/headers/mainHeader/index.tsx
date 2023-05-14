import {
    Box,
    Button,
    Flex,
    Input,
    InputGroup,
    InputLeftAddon,
    useDisclosure
} from "@chakra-ui/react"
import { COLORS } from "../../../styles/COLORS"
import { Title } from "./style"
import { StarIcon, Search2Icon } from '@chakra-ui/icons'
import { useSearchParams } from "react-router-dom"
import DrawerFavoriteBooks from "../../drawer/drawerFavoriteBooks"

export const MainHeader = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    let [searchParams, setSearchParams] = useSearchParams()

    return (
        <Box
            minH={{base: '110px', md: '60px'}}
            w={'100%'}
        >
            <Flex
                justifyContent={'space-between'}
                px={{base: '2%', md: '10%'}}
                py={{base: 15, md: 0}}
                bg={COLORS.primary}
                direction={{base: 'column', md: 'row'}}
                minH={'60px'}
                w={'100%'}
                position={'fixed'}
                zIndex={1000}
            >
                <Flex
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    flex={1}
                >
                    <Title fontSize={{base: '24px', md: '32px'}}>
                        Bloom Books
                    </Title>

                    <Box minW={'300px'} display={{ base: 'none', md: 'block' }}>
                        <InputGroup borderRadius={360} bg='white' px={'5px'} py={'2px'}>
                            <InputLeftAddon ml={'2px'} mr={'12px'} children={<Search2Icon color='#0B1A8E' boxSize={'16px'} />} />
                            <Input
                                w={'100%'}
                                borderRadius={360}
                                type='search'
                                placeholder='Pesquise aqui...'
                                value={searchParams.get('search') || ''}
                                onChange={e => setSearchParams({'search': e.target.value})}
                            />
                        </InputGroup>
                    </Box>

                    <Button onClick={onOpen}>
                        <StarIcon color='white' boxSize={'24px'} />
                    </Button>
                </Flex>

                <Box display={{ base: 'block', md: 'none' }} mt={4}>
                    <InputGroup borderRadius={360} bg='white' px={"5px"} py={'2px'}>
                        <InputLeftAddon ml={'2px'} mr={'12px'} children={<Search2Icon color='#0B1A8E' boxSize={'16px'} />} />
                        <Input
                            w={'100%'}
                            borderRadius={360}
                            type='search'
                            placeholder='Pesquise aqui...'
                            value={searchParams.get('search') || ''}
                            onChange={e => setSearchParams({'search': e.target.value})}
                        />
                    </InputGroup>
                </Box>            

                <DrawerFavoriteBooks isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            </Flex>
        </Box>
    )
}