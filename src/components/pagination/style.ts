import { Button } from "@chakra-ui/react";
import { styled } from "styled-components";

interface IPropsBtnPage {
    active?: string;
}

export const BtnPage = styled(Button)<IPropsBtnPage>`
    border-radius: 12px;
    border: 1px solid #1F2445;

    width: 31px;
    height: 32px;

    ${({ active }) => {
        if(active){
            return `
                color: white;
                background-color: #1F2445;
            `
        }

        return ''
    }}

    &:hover {
        color: white;
        background-color: #1F2445;

        transition: all 0.3s;
    }
`