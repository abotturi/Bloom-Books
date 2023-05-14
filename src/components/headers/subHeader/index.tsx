import { useContext } from 'react'
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { SelectStyle, Title } from "./style"
import { TypeRenderContext } from "../../../contexts/typeRender.context"

export const SubHeader = () => {
    const { typeRender, updateType } = useContext(TypeRenderContext)
    const { genreSelect } = useParams()

    const listIsActive = typeRender === 'list'

    return (
        <Box            
            h={'48px'}
            w={'100%'}
        >
            <Flex
                justifyContent={'space-between'}
                px={{base: '2%', md: '10%'}}
                py={{base: 15, md: 0}}
                bg='#E5E5E5'
                alignItems={'center'}
                position={'fixed'}
                h={'48px'}
                w={'100%'}
                zIndex={1000}
            >
                <Title fontSize={{base: '18px', md: '24px'}}>
                    {genreSelect || 'Gêneros'}
                </Title>
                
                <Flex alignItems={'center'} alignSelf={'flex-start'} h='100%' >
                    <Text>
                        Exibir
                    </Text>
                    <SelectStyle>
                        <option value='5'>5</option>
                    </SelectStyle>
                    <Box display={{ base: 'none', md: 'block' }} >
                        <Text>por vez</Text>
                    </Box>
                    <Flex ml={{base: '10px', md: '43px'}} gap={'8px'}>
                        <Button w='25px' onClick={updateType}>
                            <Image src={require(`../../../assets/icons/list${listIsActive ? '_active' : ''}.png`)} alt='Icon list' />
                        </Button>
                        
                        <Button w='25px' onClick={updateType}>
                            <Image src={require(`../../../assets/icons/squares${!listIsActive ? '_active' : ''}.png`)} alt='Icon squares' />
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}