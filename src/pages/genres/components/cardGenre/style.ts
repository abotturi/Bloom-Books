import { styled } from "styled-components";
import { COLORS } from "../../../../styles/COLORS";
import { Text } from "@chakra-ui/react";

export const Title = styled(Text)`
    color: ${COLORS.primary};
    text-decoration: underline;
`

export const PublicationInfo = styled(Text)`
    font-size: 12px;
`

export const UpdateInfo = styled(Text)`
    font-size: 10px;
    color: #9296AC;
`