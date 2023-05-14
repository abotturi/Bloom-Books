import { extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Drawer } = chakraTheme.components

const breakpoints = {
    sm: '30em', // 480px
    md: '780px', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
}

export const globalTheme = extendBaseTheme({
    components: {
        Drawer,
    },
    breakpoints,
    styles: {
        global: {
            'html, body': {
                margin: 0,
                padding: 0,
                fontFamily: 'Arial'
            },
            'textarea:focus, input:focus, select:focus': {
                border: 'none',
                outline: 0,
            } 
        },
    },
}) 