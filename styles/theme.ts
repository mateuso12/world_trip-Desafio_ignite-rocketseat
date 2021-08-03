import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    highlight: {
      100: '#FFBA08',
    },
    dark: {
      900: "#000",
      400: '#47585B',
      200: '#999'
    },
    light: {
      900: '#FFF',
      800: '#F5F8FA',
      400: '#DADADA'
    }
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins'
  },
})