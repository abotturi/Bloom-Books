import { Flex } from "@chakra-ui/react"
import { BtnPage } from "./style"
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useSearchParams } from "react-router-dom"

interface IPropsPaginatio {
    totalItems: number
}

export const Pagination = ({ totalItems }: IPropsPaginatio) => {
    let [searchParams, setSearchParams] = useSearchParams();  
    const numberPage = Number(searchParams.get('numberPage')) || 1
    const totalPages = Math.ceil(totalItems / 5)
    const search = searchParams.get('search') || ''

    const handleNextPage = () => {        
        if(totalPages === numberPage){
            return
        }

        setSearchParams({search, 'numberPage': String(numberPage + 1)})
    }

    const handleNewPage = (page: number) => {
        setSearchParams({search,'numberPage': String(page)})
    }
    
    const handlePreviousPage = () => {        
        if(numberPage === 1){
            return
        }
        
        setSearchParams({search,'numberPage': String(numberPage - 1)})
    }

    if(totalPages === 1 || totalPages === 0){
        return <></>
    }

    return (
        <Flex 
            justifyContent={'center'}
            alignItems={'center'}
            gap={'7px'}
            py={'15px'}
            px={{base: '2%', md: '10%'}}
            flexWrap={'wrap'}
            mt='15px'
        >
            <BtnPage onClick={handlePreviousPage}>
                <ChevronLeftIcon boxSize={'19px'} />
            </BtnPage>
            
            {
                Array.apply(null, new Array(totalPages)).map((page, idx) => (
                    <BtnPage
                        onClick={() => handleNewPage(idx + 1)}
                        key={idx}
                        active={numberPage === idx + 1 ? 'active' : undefined}
                    >
                        {idx + 1}
                    </BtnPage>
                ))
            }

            <BtnPage onClick={handleNextPage}>
                <ChevronRightIcon boxSize={'19px'} />
            </BtnPage>
        </Flex>
    )
}