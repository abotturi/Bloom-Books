import { Box } from "@chakra-ui/react";
import { IPropsChildren } from "../../interfaces/IPropsChildren";
import { MainHeader } from "../headers/mainHeader";
import { SubHeader } from "../headers/subHeader";
import { Pagination } from "../pagination";

interface IPropsLayout extends IPropsChildren {
    totalItems?: number
}

export const Layout = ({ children, totalItems = 0 }: IPropsLayout) => {
    return (
        <div>
            <MainHeader />
            <SubHeader />
            <Box
                px={{base: '2%', md: '10%'}}
            >
                {children}
            </Box>
            <Pagination totalItems={totalItems} />
        </div>
    )
}